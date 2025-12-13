# Nomad Preserve

**Go Where the Game Takes You**

A modern hunting and fishing property rental platform connecting hunters with landowners for flexible, short-term private land access.

![Nomad Preserve](https://i.imgur.com/uWf4YKi.jpeg)

---

## 🎯 Overview

Nomad Preserve is a marketplace platform that enables:
- **Hunters** to book private hunting/fishing land by the day or half-day
- **Landowners** to generate recurring revenue from their property
- **Conservation** through responsible wildlife management and reduced pressure on public lands

### Key Features

- ✅ Flexible booking (half-day, full-day, week-long)
- ✅ Last-minute reservations
- ✅ Property owner dashboard
- ✅ 4-step listing creation workflow
- ✅ AI-powered listing descriptions (via Claude)
- ✅ Stripe payment integration
- ✅ User authentication
- ✅ Property search and filtering
- ✅ Booking management system

---

## 🚀 Quick Start

### Online Deployment (No Local Setup)

#### Option 1: CodeSandbox
1. Go to [codesandbox.io/s/](https://codesandbox.io/s/)
2. Create new React sandbox
3. Copy `App.js` from this repo
4. Add dependency: `lucide-react`
5. Export to GitHub
6. Deploy to Netlify

#### Option 2: Direct Deploy to Netlify
1. Fork this repository
2. Connect to [Netlify](https://netlify.com)
3. Deploy automatically

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/nomad-preserve.git
cd nomad-preserve

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📁 Project Structure

```
nomad-preserve/
├── public/
│   ├── index.html
│   └── images/
│       └── hero-background.jpg
├── src/
│   ├── App.js              # Main React component
│   ├── index.js
│   └── index.css
├── backend/
│   ├── app.py              # Flask backend
│   ├── requirements.txt
│   └── .env.example
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette
- **Primary:** `#556049` (Dark Olive Green)
- **Secondary:** `#78826B` (Sage Green)
- **Tertiary:** `#796E68` (Warm Gray)
- **Black:** `#000000`
- **White:** `#FFFFFF`

### Typography
- Bold headers for impact
- Clean, readable body text
- Italics for taglines and quotes

---

## 🛠️ Technologies

### Frontend
- **React** - UI framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling (via inline styles)

### Backend
- **Flask** - Python web framework
- **SQLite** - Database
- **Stripe** - Payment processing
- **Anthropic Claude** - AI features
- **JWT** - Authentication

---

## 📦 Dependencies

### Frontend
```json
{
  "react": "^18.2.0",
  "lucide-react": "^0.263.1"
}
```

### Backend
```txt
Flask==3.0.0
Flask-SQLAlchemy==3.1.1
Flask-CORS==4.0.0
Flask-Bcrypt==1.0.1
Flask-JWT-Extended==4.6.0
anthropic==0.39.0
stripe==7.10.0
python-dotenv==1.0.0
```

---

## 🔧 Configuration

### Frontend Configuration

Update API endpoints in `App.js` when connecting to backend:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

### Backend Configuration

Create a `.env` file in the backend directory:
```env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
JWT_SECRET_KEY=your-jwt-secret-here
ANTHROPIC_API_KEY=your-anthropic-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key-here
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key-here
```

---

## 🌐 Deployment

### Netlify (Frontend)

1. **Connect Repository:**
   - Sign in to Netlify
   - Click "Add new site"
   - Import from GitHub

2. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: build
   ```

3. **Environment Variables:**
   - Add `REACT_APP_API_URL` pointing to your backend

4. **Custom Domain:**
   - Add domain in Netlify dashboard
   - Update DNS records

### Backend Deployment Options

#### Heroku
```bash
heroku create nomad-preserve-api
heroku config:set ANTHROPIC_API_KEY=your-key
git push heroku main
```

#### Railway
- Connect GitHub repo
- Add environment variables
- Auto-deploys on push

#### DigitalOcean App Platform
- Import from GitHub
- Configure environment variables
- Deploy

---

## 🎯 Core Features

### For Hunters
- **Browse Properties** - Search by location, type, season
- **Flexible Booking** - Book by day, half-day, or week
- **Last-Minute Access** - Book same-day hunts
- **Private Land** - Less pressure than public hunting
- **AI Chat Assistant** - Get help finding the right property

### For Landowners
- **Easy Listing** - 4-step property creation
- **Recurring Revenue** - Earn income at your leisure
- **AI Description Writer** - Claude improves your listings
- **Dashboard Analytics** - Track bookings and revenue
- **Flexible Control** - List when you want

---

## 📱 Pages/Views

1. **Home** - Hero section with brand messaging
2. **About Us** - Mission, vision, and values
3. **Hunters** - Benefits for hunters, property browsing
4. **Land Owners** - Benefits for owners, join CTA
5. **Property Details** - Individual property information
6. **Owner Dashboard** - Property management and analytics
7. **Create Listing** - 4-step property submission wizard
8. **Checkout** - Booking and payment (Stripe)

---

## 🔐 Security

- ✅ JWT authentication for API requests
- ✅ Password hashing with bcrypt
- ✅ CORS enabled for frontend communication
- ✅ Stripe secure payment processing
- ✅ Environment variables for sensitive data
- ✅ Input validation on all forms

---

## 📈 Roadmap

### Phase 1 (Current)
- [x] Core platform UI
- [x] Property browsing
- [x] Owner listing workflow
- [x] Basic backend API
- [ ] Stripe integration (frontend)
- [ ] User authentication (frontend)

### Phase 2
- [ ] Email notifications
- [ ] Calendar availability system
- [ ] Photo upload for properties
- [ ] Review and rating system
- [ ] Booking confirmation emails

### Phase 3
- [ ] Mobile app
- [ ] Advanced search filters
- [ ] Map-based property search
- [ ] Messaging between owners and hunters
- [ ] Drone footage integration
- [ ] Live scouting camera feeds

### Phase 4
- [ ] Property management services
- [ ] Scout services
- [ ] Trail camera subscriptions
- [ ] Analytics for owners

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 👥 Team

Built by hunters for hunters and landowners.

---

## 📞 Support

For questions or support:
- **Email:** support@nomadpreserve.com
- **Website:** https://nomadpreserve.com

---

## 🙏 Acknowledgments

- **Anthropic Claude** - AI assistant features
- **Stripe** - Payment processing
- **Lucide** - Icon library
- **React** - Frontend framework

---

## 📊 Value Propositions

### Flexibility
- Book a half-day hunt the evening before or even day-of
- Hunt like a nomad - go where the game takes you
- No long-term leases required

### Opportunity
- Access private land with less hunting pressure
- Pursue ideal weather and shifting game patterns
- More options to get in the field

### Conservation
- Promote responsible wildlife management
- Reduce pressure on crowded public land
- Support sustainable hunting practices

---

**Go Where the Game Takes You** 🎯

Built with ❤️ for the hunting and conservation community.
