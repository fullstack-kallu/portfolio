from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Skill, Project, Education, Certification, ContactMessage
from .forms import ContactForm
from django.core.mail import send_mail
from django.conf import settings

def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('home')
    else:
        form = ContactForm()

    skills = Skill.objects.all()
    projects = Project.objects.all()
    education = Education.objects.all()
    certifications = Certification.objects.all()
    
    context = {
        'skills': skills,
        'projects': projects,
        'education': education,
        'certifications': certifications,
        'form': form,
    }
    return render(request, 'core/home.html', context)

def about(request):
    return render(request, 'core/about.html')

def skills(request):
    skills_list = Skill.objects.all()
    return render(request, 'core/skills.html', {'skills': skills_list})

def projects(request):
    projects_list = Project.objects.all()
    return render(request, 'core/projects.html', {'projects': projects_list})

def timeline(request):
    education_list = Education.objects.all()
    certifications_list = Certification.objects.all()
    context = {
        'education': education_list,
        'certifications': certifications_list,
    }
    return render(request, 'core/timeline.html', context)

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            # Send email notification
            subject = f"New Contact Message: {form.cleaned_data['subject']}"
            message_body = f"From: {form.cleaned_data['name']} <{form.cleaned_data['email']}>\n\nMessage:\n{form.cleaned_data['message']}"
            send_mail(subject, message_body, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER], fail_silently=False)
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'core/contact.html', {'form': form})
