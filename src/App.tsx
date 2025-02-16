import { ShoppingBasket, Phone, Mail, MapPin, MessageCircleDashed as WhatsappIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import icon from './res/icon.png';
import spices from './res/spices.png';
import aata from './res/aata.png';
import care from './res/care.png';
import lentils from './res/lentils.png';
import stationery from './res/stationery.png';
import dairy from './res/dairy.png';

function App() {
  const scrollCategories = (direction: 'left' | 'right') => {
    const container = document.getElementById('categories-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-biscuit-light">
      {/* Header */}
      <header className="bg-teak text-biscuit-light fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <img src={icon} alt="Mohta Mart" className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"></img>
              <div>
              <h1 className="text-2xl font-bold">Mohta Mart</h1>
              <p className="text-sm text-biscuit">Aapke Ghar ki Dukaan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="transition-all duration-300 ease-in-out hover:text-biscuit hover:scale-105 focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50 rounded-lg px-3 py-1"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="transition-all duration-300 ease-in-out hover:text-biscuit hover:scale-105 focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50 rounded-lg px-3 py-1"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('categories')} 
                className="transition-all duration-300 ease-in-out hover:text-biscuit hover:scale-105 focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50 rounded-lg px-3 py-1"
              >
                Categories
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="transition-all duration-300 ease-in-out hover:text-biscuit hover:scale-105 focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50 rounded-lg px-3 py-1"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] bg-cover bg-center pt-20" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-teak bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-biscuit-light">
            <h1 className="text-5xl font-bold mb-6">Welcome to Mohta Mart</h1>
            <p className="text-xl mb-8">Your neighborhood grocery store bringing quality products right to your doorstep.</p>
            <button 
              onClick={() => scrollToSection('categories')} 
              className="bg-teak-light hover:bg-teak-dark text-biscuit-light px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50"
            >
              Explore Our Categories
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teak text-center mb-12">About Us</h2>
          
          {/* History - Left image, Right text */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 transition-transform duration-300 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                   alt="Store History" 
                   className="rounded-lg shadow-lg w-full h-[400px] object-cover transition-shadow duration-300 hover:shadow-xl"/>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold text-teak mb-4">Our History</h3>
              <p className="text-teak-dark text-lg leading-relaxed">
                Founded in 1950, Mohta Mart began as a small family store with a vision to serve our community with quality groceries. Over three decades, we've grown into a trusted neighborhood destination while maintaining our family values and personal touch.
              </p>
            </div>
          </div>

          {/* Promise - Right image, Left text */}
          <div className="flex flex-col-reverse md:flex-row items-center mb-16">
            <div className="w-full md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-semibold text-teak mb-4">Our Promise</h3>
              <p className="text-teak-dark text-lg leading-relaxed">
                We promise to deliver only the freshest products, maintain the highest quality standards, and provide exceptional service to our customers. Every item on our shelves is carefully selected to ensure it meets our strict quality criteria.
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 transition-transform duration-300 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                   alt="Our Promise" 
                   className="rounded-lg shadow-lg w-full h-[400px] object-cover transition-shadow duration-300 hover:shadow-xl"/>
            </div>
          </div>

          {/* Vision - Left image, Right text */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 transition-transform duration-300 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                   alt="Our Vision" 
                   className="rounded-lg shadow-lg w-full h-[400px] object-cover transition-shadow duration-300 hover:shadow-xl"/>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold text-teak mb-4">Our Vision</h3>
              <p className="text-teak-dark text-lg leading-relaxed">
                We envision being the most trusted neighborhood grocery store, combining modern convenience with traditional values. Our goal is to make quality groceries accessible to every household while fostering community connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-biscuit relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teak text-center mb-12">Our Categories</h2>
          <div className="relative">
            <button 
              onClick={() => scrollCategories('left')}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-teak text-white p-2 rounded-full shadow-lg hover:bg-teak-dark transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollCategories('right')}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-teak text-white p-2 rounded-full shadow-lg hover:bg-teak-dark transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-biscuit focus:ring-opacity-50"
            >
              <ChevronRight size={24} />
            </button>
            <div 
              id="categories-container"
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { name: 'Spices', image: spices },
                { name: 'Household Items', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                { name: 'Flours', image: aata },
                { name: 'Personal Care', image: care },
                { name: 'Lentils', image: lentils },
                { name: 'Stationery', image: stationery },
                { name: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                { name: 'Dairy Products', image: dairy }
              ].map((category) => (
                <div 
                  key={category.name} 
                  className="flex-none w-80 snap-start mr-6 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
                >
                  <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-teak">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-teak text-biscuit-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
              <Phone className="flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p>+91 93301-75013 / +91 83348-69990</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
              <Mail className="flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p>martmohta@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
              <MapPin className="flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-left">Plaza Avenida, Shop Number - G 04</p>
                <p className="text-left">Ground Floor, New Town</p>
                <p className="text-left">Kolkata - 700160</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919330175013"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
      >
        <WhatsappIcon size={24} />
      </a>
    </div>
  );
}

export default App;