<template>
  <div id="app">
    <!-- Header/Navigation -->
    <header class="bg-aerola-light-cream shadow-md fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-3">
          <div class="flex items-center space-x-3">
            <img src="/img/logoAerola.jpeg" alt="Aerola Juice Logo" class="w-12 h-12 rounded-lg object-cover shadow-md">
            <h1 class="text-2xl font-bold text-aerola-dark-brown">Aerola Juice</h1>
          </div>

          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-aerola-brown hover:text-aerola-dark-brown transition-colors">Home</a>
            <a href="#about" class="text-aerola-brown hover:text-aerola-dark-brown transition-colors">About</a>
            <a href="#science" class="text-aerola-brown hover:text-aerola-dark-brown transition-colors">Science</a>
            <a href="#contact" class="text-aerola-brown hover:text-aerola-dark-brown transition-colors">Contact</a>
          </div>

          <button @click="toggleMobileMenu" class="md:hidden text-aerola-brown hover:text-aerola-dark-brown p-2 rounded-lg hover:bg-aerola-beige transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-aerola-light-cream shadow-lg border-t border-aerola-beige">
          <div class="px-4 py-4 space-y-3">
            <a href="#home" @click="closeMobileMenu" class="block text-aerola-brown hover:text-aerola-dark-brown transition-colors py-2">Home</a>
            <a href="#about" @click="closeMobileMenu" class="block text-aerola-brown hover:text-aerola-dark-brown transition-colors py-2">About</a>
            <a href="#science" @click="closeMobileMenu" class="block text-aerola-brown hover:text-aerola-dark-brown transition-colors py-2">Science</a>
            <a href="#contact" @click="closeMobileMenu" class="block text-aerola-brown hover:text-aerola-dark-brown transition-colors py-2">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="pt-20 section-padding bg-gradient-to-br from-aerola-cream to-aerola-beige min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-aerola-dark-brown leading-tight">
                A New
                <span class="text-aerola-gold"> Hope</span>
                <br class="hidden sm:block">For Our <span class="text-aerola-medium-brown">Smallest</span> Warriors
              </h1>
              <p class="text-lg sm:text-xl lg:text-2xl text-aerola-brown leading-relaxed max-w-2xl">
                When life begins with immense challenges, every drop of nutrition counts.
                <span class="font-semibold text-aerola-dark-brown">Aerola Juice</span> offers the most advanced formula for premature babies who need everything we can give.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#about" class="btn-primary text-center">
                Learn Our Mission
              </a>
              <a href="#science" class="btn-secondary text-center">
                View Scientific Evidence
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-aerola-brown">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-aerola-gold rounded-full animate-pulse"></div>
                <span class="font-medium">FDA Approved</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-aerola-gold rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                <span class="font-medium">Clinically Tested</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-aerola-gold rounded-full animate-pulse" style="animation-delay: 1s"></div>
                <span class="font-medium">Evidence Based</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div class="relative">
              <div class="w-72 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-white to-aerola-cream rounded-3xl flex items-center justify-center shadow-2xl border border-aerola-beige hover:shadow-3xl transition-all duration-500 floating-animation">
                <div class="text-center space-y-6">
                  <img src="/img/logoAerola.jpeg" alt="Aerola Juice" class="w-40 sm:w-48 h-48 sm:h-56 rounded-2xl mx-auto shadow-lg object-cover hover:scale-105 transition-transform duration-300">
                  <div class="bg-aerola-dark-brown text-white px-4 py-2 rounded-lg font-bold text-lg">
                    Premium Formula
                  </div>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-aerola-gold rounded-full shadow-lg pulse-slow"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-aerola-light-gold rounded-full shadow-lg pulse-slow" style="animation-delay: 1s"></div>
              <div class="absolute top-1/2 -left-6 w-4 h-4 bg-aerola-yellow rounded-full shadow-lg pulse-slow" style="animation-delay: 2s"></div>
              <div class="absolute top-1/4 -right-2 w-3 h-3 bg-aerola-beige rounded-full shadow-md pulse-slow" style="animation-delay: 0.5s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="about" class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            Our Mission
          </h2>
          <p class="text-xl text-aerola-brown max-w-4xl mx-auto leading-relaxed">
            They say death is part of life, but honestly, I don't like that concept.
            Not when it comes to those who are just beginning this journey.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          <div class="text-center space-y-4 p-6 lg:p-8 rounded-2xl bg-aerola-light-cream hover:bg-aerola-cream transition-colors duration-300 shadow-md hover:shadow-lg">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown">Compassion</h3>
            <p class="text-aerola-brown">
              For families facing the unthinkable, we offer hope through science and care.
            </p>
          </div>

          <div class="text-center space-y-4 p-6 lg:p-8 rounded-2xl bg-aerola-light-cream hover:bg-aerola-cream transition-colors duration-300 shadow-md hover:shadow-lg">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown">Innovation</h3>
            <p class="text-aerola-brown">
              Formula developed with cutting-edge technology, surpassing traditional neonatal nutrition standards.
            </p>
          </div>

          <div class="text-center space-y-4 p-6 lg:p-8 rounded-2xl bg-aerola-light-cream hover:bg-aerola-cream transition-colors duration-300 shadow-md hover:shadow-lg sm:col-span-2 md:col-span-1">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown">Strength</h3>
            <p class="text-aerola-brown">
              Transforming vulnerabilities into victories, one nutrient at a time, for our smallest warriors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Science Section -->
    <section id="science" class="section-padding bg-gradient-to-br from-aerola-beige to-aerola-light-brown">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            Life-Saving Science
          </h2>
          <p class="text-xl text-aerola-brown max-w-4xl mx-auto leading-relaxed">
            Our formula is not imitation—it's innovation. Designed to replicate the gold standard of human milk,
            surpassing it to meet the specific needs of premature babies.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div class="space-y-8">
            <div class="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-aerola-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">🧬</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">Optimized Protein</h3>
                  <p class="text-aerola-brown">
                    Precise protein-energy ratio of 3.8-4.4 g/kg/day through highly bioavailable whey and casein blends,
                    promoting accelerated growth without metabolic overload.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-aerola-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">🧠</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">Neurological Development</h3>
                  <p class="text-aerola-brown">
                    Omega-3 fatty acids like DHA nourish developing brains,
                    reducing neurodevelopmental risks by up to 20%.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-aerola-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">🛡️</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">Advanced Protection</h3>
                  <p class="text-aerola-brown">
                    Specific probiotics proven in meta-analyses to reduce necrotizing enterocolitis by 50%,
                    decrease sepsis and improve intestinal microbiota.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="bg-white p-6 lg:p-12 rounded-3xl shadow-2xl max-w-md w-full">
              <div class="text-center space-y-6">
                <h3 class="text-2xl font-bold text-aerola-dark-brown">Proven Results</h3>

                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-aerola-brown">NEC Reduction</span>
                    <span class="text-2xl font-bold text-aerola-gold">50%</span>
                  </div>
                  <div class="w-full bg-aerola-cream rounded-full h-3">
                    <div class="bg-aerola-gold h-3 rounded-full" style="width: 50%"></div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-aerola-brown">Neurological Improvement</span>
                    <span class="text-2xl font-bold text-aerola-gold">20%</span>
                  </div>
                  <div class="w-full bg-aerola-cream rounded-full h-3">
                    <div class="bg-aerola-gold h-3 rounded-full" style="width: 20%"></div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-aerola-brown">FDA Approval</span>
                    <span class="text-2xl font-bold text-aerola-gold">100%</span>
                  </div>
                  <div class="w-full bg-aerola-cream rounded-full h-3">
                    <div class="bg-aerola-gold h-3 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-aerola-dark-brown to-aerola-darker-brown relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute top-10 left-10 w-20 h-20 bg-aerola-gold rounded-full opacity-20 floating-animation"></div>
      <div class="absolute bottom-20 right-20 w-16 h-16 bg-aerola-yellow rounded-full opacity-30 floating-animation" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-aerola-light-gold rounded-full opacity-25 floating-animation" style="animation-delay: 1s"></div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p class="text-xl text-aerola-cream max-w-4xl mx-auto leading-relaxed">
            For devastated families, exhausted clinicians and innovators ready to heal:
            we are rewriting neonatal destinies, one nutrient at a time.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:invest@aerolajuice.com" class="btn-primary bg-aerola-gold hover:bg-aerola-light-gold text-center">
              Invest With Us
            </a>
            <a href="mailto:partnerships@aerolajuice.com" class="btn-secondary border-aerola-cream text-aerola-cream hover:bg-aerola-cream hover:text-aerola-dark-brown text-center">
              Become a Partner
            </a>
          </div>
          <p class="text-aerola-cream font-medium">
            What is your position in this fight?
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="section-padding bg-aerola-cream">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <img src="/img/logoAerola.jpeg" alt="Aerola Juice Logo" class="w-12 h-12 rounded-lg object-cover shadow-md">
              <h3 class="text-2xl font-bold text-aerola-dark-brown">Aerola Juice</h3>
            </div>
            <p class="text-aerola-brown">
              Providing superior quality nutrition for the new generation when they need it most.
            </p>
          </div>

          <div class="space-y-4">
            <h4 class="text-lg font-bold text-aerola-dark-brown">Product</h4>
            <ul class="space-y-2 text-aerola-brown">
              <li><a href="#home" class="hover:text-aerola-dark-brown transition-colors">Aerola Formula</a></li>
              <li><a href="#science" class="hover:text-aerola-dark-brown transition-colors">Clinical Research</a></li>
              <li><a href="#science" class="hover:text-aerola-dark-brown transition-colors">Evidence</a></li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="text-lg font-bold text-aerola-dark-brown">Company</h4>
            <ul class="space-y-2 text-aerola-brown">
              <li><a href="#about" class="hover:text-aerola-dark-brown transition-colors">About Us</a></li>
              <li><a href="#about" class="hover:text-aerola-dark-brown transition-colors">Mission</a></li>
              <li><a href="mailto:partnerships@aerolajuice.com" class="hover:text-aerola-dark-brown transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="text-lg font-bold text-aerola-dark-brown">Contact</h4>
            <ul class="space-y-2 text-aerola-brown">
              <li><a href="mailto:contact@aerolajuice.com" class="hover:text-aerola-dark-brown transition-colors">contact@aerolajuice.com</a></li>
              <li><a href="tel:+15559999999" class="hover:text-aerola-dark-brown transition-colors">+1 (555) 999-9999</a></li>
              <li>New York, USA</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-aerola-beige mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-aerola-brown">
              © 2024 Aerola Juice. All rights reserved.
            </p>
            <div class="flex space-x-6 text-aerola-brown">
              <a href="#contact" class="hover:text-aerola-dark-brown transition-colors">Privacy Policy</a>
              <a href="#contact" class="hover:text-aerola-dark-brown transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  },
  mounted() {
    // Smooth scroll para links de navegação
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}
</script>