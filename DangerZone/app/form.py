from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, DecimalField, SubmitField
from wtforms.validators import DataRequired


class DangerForm(FlaskForm):
    category = SelectField(u'Category', choices=[
        ('env-pollution', 'Environmental Pollution'),
        ('natural-disaster', 'Natural Disaster'),
        ('epidemy', 'Epidemy'),
        ('terrorist', 'Terrorist Attack'),
        ('war', 'War zone')])
    x_coordinate = DecimalField(u'X Coordinate', render_kw={'id': 'coord-x', 'placeholder': 'X Coordinate'}, validators=[DataRequired()])
    y_coordinate = DecimalField(u'Y Coordinate', render_kw={'id': 'coord-y', 'placeholder': 'Y Coordinate'}, validators=[DataRequired()])
    submit = SubmitField('Submit a danger')
