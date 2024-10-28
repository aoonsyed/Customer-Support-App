# Ticket Management System

A full-stack ticket management application built with Django REST Framework and Angular, allowing users to create, track, and manage support tickets efficiently.

## 🚀 Features

- **Ticket Management**
  - Create new support tickets
  - View list of all tickets
  - Update ticket status
  - Delete tickets
  - Mark tickets as resolved
- **Real-time Status Updates**
- **Responsive Design**
- **User-friendly Interface**
- **REST API Backend**

## 🛠️ Tech Stack

### Backend
- Django 4.x
- Django REST Framework
- PostgreSQL
- django-cors-headers
- Python 3.10

### Frontend
- Angular 15+
- TypeScript
- Tailwind CSS
- Angular HTTP Client
- RxJS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.10
- Node.js (14+ recommended)
- npm
- SQLlite3
- Git

## 🔧 Installation

### Backend Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd ticket-system
```

2. Create and activate virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies
```bash
pip install -r requirements.txt
```

4. Configure environment variables
```bash
# Create .env file in backend directory
DEBUG=True
SECRET_KEY=your_secret_key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:4200
```

5. Run migrations
```bash
python manage.py migrate
```

6. Start the development server
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to the frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

## 🔌 API Endpoints

### Tickets

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tickets/` | List all tickets |
| POST | `/api/tickets/` | Create a new ticket |
| GET | `/api/tickets/{id}/` | Retrieve a ticket |
| PATCH | `/api/tickets/{id}/` | Update a ticket |
| DELETE | `/api/tickets/{id}/` | Delete a ticket |
| PATCH | `/api/tickets/{id}/resolve/` | Mark ticket as resolved |

### Request/Response Examples

#### Create Ticket
```json
// POST /api/tickets/
// Request
{
  "title": "New Ticket",
  "description": "Identity Verification",
  "status": "open"
}

// Response
{
  "id": 1,
  "title": "New Ticket",
  "description": "Identity Verification",
  "status": "open",
  "created_at": "2024-10-28T12:26:37.399881Z",
  "updated_at": "2024-10-28T12:26:37.399881Z"
}
```

## 📁 Project Structure

### Backend
```
backend/
├── manage.py
├── requirements.txt
├── tickets/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
└── config/
    ├── settings.py
    └── urls.py
```

### Frontend
```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ticket-form/
│   │   │   └── ticket-list/
│   │   ├── services/
│   │   │   └── ticket.service.ts
│   │   ├── models/
│   │   │   └── ticket.ts
│   │   └── app.module.ts
│   ├── assets/
│   └── styles.css
└── package.json
```

## 🔐 Environment Variables

### Backend (.env)
```
DEBUG=True
SECRET_KEY=your_secret_key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:4200
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/test/tickets'
};
```

## 🚦 Running Tests

### Backend Tests
```bash
python manage.py test
```

### Frontend Tests
```bash
ng test
```

## 🔄 Development Workflow

1. Create a new branch for your feature
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them
```bash
git add .
git commit -m "Add your commit message"
```

3. Push to your branch and create a pull request
```bash
git push origin feature/your-feature-name
```

## 🚀 Deployment

### Backend Deployment (Example using Heroku)
```bash
heroku create
git push heroku main
heroku run python manage.py migrate
```

### Frontend Deployment (Example using Vercel)
```bash
ng build --prod
```

## 🛡️ Security Considerations

- CORS is configured to allow only specified origins
- Django REST Framework authentication is implemented
- Sensitive data is stored in environment variables
- Input validation is implemented on both frontend and backend
- SQL injection protection through Django ORM
- XSS protection through Angular's built-in sanitization

## 🔍 Troubleshooting

Common issues and solutions:

1. **CORS Errors**
   - Ensure CORS_ALLOWED_ORIGINS in Django settings matches your frontend URL
   - Check if Django CORS headers middleware is properly configured

2. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check database credentials in .env file
   - Ensure database exists and is accessible

3. **Angular Build Errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

