from django.shortcuts import render
from django.db.models import query
from django.shortcuts import redirect, render
from django.db.models import Q
from django.views import View
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect, request
from django.urls import reverse
from django.views.generic.base import View
from django.views.generic.edit import UpdateView, DeleteView
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from .models import  Post, PostArticle
from landing.models import Community_User
from .forms import PostArticleForm, PostFeedForm, UserForm
from django.contrib.auth.models import User

# Create your views here.
@login_required(login_url='accounts:login')
def socialHome(request):
  print('Entered Home <<<<<<<<<<<<<<<<<<')
  print(request)
  if request.method == "POST":
    posts = Post.objects.all().order_by('-created_on')
    form = PostFeedForm(request.POST)
    if form.is_valid():
      new_post = form.save(commit=False)
      new_post.author = Community_User.objects.get(user = request.user)
      new_post.save()
    return HttpResponseRedirect(request.path)

  else:
    print(request)
    posts = Post.objects.all().order_by('-created_on')
    current_user = Community_User.objects.get(user = request.user)
    form = PostFeedForm()
    users = Community_User.objects.all()

    context = {
      "post_list": posts,
      'form' : form,
      'user': current_user,
      'list': users,
    }

    return render(request, 'social/mbrpage.html', context)
