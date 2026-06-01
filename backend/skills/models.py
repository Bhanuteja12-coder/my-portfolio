from django.db import models

# Create your models here.
class Skill(models.Model):
    
    CATEGORY_CHOICES = [
        ('Language', 'Language'),
        ('Framework', 'Framework'),
        ('Tool', 'Tool'),
        ('Platform', 'Platform'),
        ('Sokt skill', 'Sokt skill'),
        ('Database', 'Database'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    
    def __str__(self):
        return self.name