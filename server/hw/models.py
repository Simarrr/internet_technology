from django.db import models


class First(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(verbose_name='Название судна', max_length=150)
    boat_type = models.CharField(verbose_name='Тип судна', max_length=150)

    def __str__(self):
        return f'[{self.id}] {self.name}'


class Second(models.Model):
    id = models.AutoField(primary_key=True)
    place = models.CharField(verbose_name='Пункт назначения', max_length=150)
    cargo = models.CharField(verbose_name='Груз', max_length=150, blank=True)
    fk = models.ForeignKey('First', on_delete=models.CASCADE)

    def __str__(self):
        return f'[{self.id}] {self.name}'

