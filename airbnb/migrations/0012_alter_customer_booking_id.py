# Generated by Django 4.2.7 on 2023-11-28 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airbnb', '0011_alter_customer_airbnb'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='booking_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
