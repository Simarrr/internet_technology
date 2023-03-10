# Generated by Django 4.1.5 on 2023-01-20 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hw', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='second',
            name='car',
        ),
        migrations.RemoveField(
            model_name='second',
            name='number',
        ),
        migrations.AddField(
            model_name='first',
            name='boat_type',
            field=models.CharField(default=1, max_length=150, verbose_name='Тип судна'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='second',
            name='cargo',
            field=models.CharField(default=1, max_length=150, verbose_name='Груз'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='first',
            name='full_name',
            field=models.CharField(max_length=150, verbose_name='Название судна'),
        ),
        migrations.AlterField(
            model_name='second',
            name='place',
            field=models.CharField(max_length=150, verbose_name='Пункт назначения'),
        ),
    ]
