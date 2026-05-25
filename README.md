# My Portfolio Website

A full-stack portfolio website built using React.js, Django REST Framework, and PostgreSQL.

## Tech Stack

Frontend:
- React.js
- Axios
- Vite

Backend:
- Django
- Django REST Framework

Database:
- SQLite (development)
- PostgreSQL (deployment)

## Features

- Portfolio profile section
- Projects section
- Skills section
- Contact form
- REST API integration
- Responsive UI

## Project Structure

```text
my-portfolio/
├── backend/
│   ├── config/
│   ├── portfolio/
│   └── manage.py
│
├── frontend/
│   ├── src/
│   └── package.json
```

## Installation

Backend:

```bash
cd backend
python -m venv venv
venv\Scripts\activate

pip install django
pip install djangorestframework
pip install psycopg2-binary

python manage.py migrate
python manage.py runserver
```

Frontend:

```bash
cd frontend

npm install
npm run dev
```

## API Endpoints

```text
GET /api/profile/
```

## Current Progress

- [x] Django backend setup
- [x] DRF integration
- [x] Profile API created
- [x] React frontend setup
- [x] API connected to frontend
- [ ] Projects API
- [ ] Contact API
- [ ] PostgreSQL integration
- [ ] Deployment
