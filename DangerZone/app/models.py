from app import db


class Danger(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    x = db.Column(db.Float, unique=False)
    y = db.Column(db.Float, unique=False)
    category = db.Column(db.String(64))

    def __repr__(self):
        return f'<Danger {self.category}>'
