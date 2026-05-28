from django.db import models

class Projects(models.Model):
    name = models.CharField(max_length=100)
    teck_stack = models.CharField(max_length=150)
    bio = models.TextField()
    github_link = models.URLField()
    demo_link = models.URLField()

    def __str__(self):
        return self.name