from flask import render_template, redirect
from app import app, db
from app.form import DangerForm
from app.models import Danger

methods = ['GET', 'POST']
    

@app.route('/', methods=methods)
@app.route('/index', methods=methods)
def index():
    form = DangerForm()
    data = Danger.query.all()
    if form.validate_on_submit():
        x, y, category = form.x_coordinate.data, form.y_coordinate.data, form.category.data
        try:
            db.session.add(Danger(x=x, y=y, category=category))
            db.session.commit()
        except:
            db.session.rollback()
            print('An error occured')
        else:
            return redirect('/index')
    return render_template('index.html', form=form, data=data)


@app.route('/about')
def about():
    return render_template('about.html')
