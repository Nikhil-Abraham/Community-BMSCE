from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Post, PostArticle



admin.site.register(Post)
admin.site.register(PostArticle)