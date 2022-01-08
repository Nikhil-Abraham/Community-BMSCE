
from django.contrib import admin
from django.urls import include,path

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('landing.urls'), name='landing'),
    path('social/', include('social.urls'), name='social'),
]
