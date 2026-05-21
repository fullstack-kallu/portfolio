import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_portfolio.settings')
django.setup()

from core.models import Skill, Education, Project

def populate():
    # Clear existing data
    Skill.objects.all().delete()
    Education.objects.all().delete()
    Project.objects.all().delete()

    # Skills
    skills = [
        ('Python', 95, 'fab fa-python'),
        ('Django', 90, 'fas fa-code'),
        ('Flask', 80, 'fas fa-flask'),
        ('REST API', 85, 'fas fa-server'),
        ('JavaScript', 85, 'fab fa-js'),
        ('HTML', 95, 'fab fa-html5'),
        ('CSS', 90, 'fab fa-css3-alt'),
        ('Bootstrap', 90, 'fab fa-bootstrap'),
        ('SQLite', 85, 'fas fa-database'),
        ('MySQL', 80, 'fas fa-database'),
        ('Git', 85, 'fab fa-git-alt'),
        ('GitHub', 90, 'fab fa-github'),
        ('AI/LLM', 75, 'fas fa-robot'),
    ]
    for name, prof, icon in skills:
        Skill.objects.create(name=name, proficiency=prof, icon_class=icon)

    # Education/Experience
    Education.objects.create(
        degree='Python Full Stack Developer Intern',
        institution='INet Infotech',
        year='Internship',
        description='Engineered scalable web solutions and APIs. Developed SHOPZEN, a high-performance E-commerce platform using Django.',
        order=1
    )
    Education.objects.create(
        degree='MCA (Master of Computer Applications)',
        institution='Student',
        year='Current',
        description='Focusing on advanced software development, AI implementations, and system architecture.',
        order=2
    )

    # Projects
    Project.objects.create(
        title='SHOPZEN \u2014 E-Commerce Platform',
        description='Full-featured online shopping website with authentication, cart, order management, and responsive UI.',
        technologies='Python, Django, Bootstrap, SQLite',
        order=1
    )
    Project.objects.create(
        title='Blood Bank Management System',
        description='System for managing blood donors, blood requests, availability tracking, and hospital coordination.',
        technologies='Python, Django, MySQL',
        order=2
    )
    Project.objects.create(
        title='PowerTrack \u2014 Electricity Complaint Management System',
        description='Citizens can report power issues with location and images. Officers can track and resolve complaints.',
        technologies='Python, Django, Bootstrap, SQLite',
        order=3
    )
    Project.objects.create(
        title='QEval AI \u2014 LLM-Based Question Paper Quality Checker',
        description='AI-powered system that evaluates question papers using LLMs for quality, difficulty balance, repetition, and syllabus coverage.',
        technologies='Python, AI/LLM, NLP, Flask',
        order=4
    )

    print("Database populated successfully!")

if __name__ == '__main__':
    populate()
