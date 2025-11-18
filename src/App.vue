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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div class="space-y-6 lg:space-y-8">
            <div class="space-y-4 lg:space-y-6">
              <div class="bg-aerola-gold text-aerola-dark-brown px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-block animate-pulse">
                🏥 Trusted in 200+ NICUs Worldwide
              </div>

              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-aerola-dark-brown leading-tight">
                Every <span class="text-aerola-gold gradient-text">Drop</span> Matters
                <br class="hidden sm:block">When <span class="text-aerola-medium-brown">Life</span> Hangs in the Balance
              </h1>

              <div class="bg-aerola-light-cream p-4 sm:p-6 rounded-2xl border-l-4 border-aerola-gold shadow-lg">
                <p class="text-base sm:text-lg lg:text-xl text-aerola-dark-brown font-medium italic">
                  "In those first critical hours, when your baby fights for every breath,
                  every nutrient becomes a lifeline. This is not just nutrition –
                  this is <span class="font-bold text-aerola-gold">hope in a bottle</span>."
                </p>
                <div class="flex items-center mt-4 space-x-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 bg-aerola-gold rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-sm sm:text-base">MD</span>
                  </div>
                  <div>
                    <p class="font-semibold text-aerola-dark-brown text-sm sm:text-base">Dr. Sarah Chen</p>
                    <p class="text-xs sm:text-sm text-aerola-brown">Neonatal Intensive Care Unit Director</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <div class="flex items-center">
                  <div class="flex -space-x-1 sm:-space-x-2">
                    <div class="w-6 h-6 sm:w-8 sm:h-8 bg-aerola-gold rounded-full border-2 border-white"></div>
                    <div class="w-6 h-6 sm:w-8 sm:h-8 bg-aerola-medium-brown rounded-full border-2 border-white"></div>
                    <div class="w-6 h-6 sm:w-8 sm:h-8 bg-aerola-light-brown rounded-full border-2 border-white"></div>
                    <div class="w-6 h-6 sm:w-8 sm:h-8 bg-aerola-beige rounded-full border-2 border-white flex items-center justify-center">
                      <span class="text-xs text-aerola-dark-brown font-bold">+5K</span>
                    </div>
                  </div>
                  <span class="ml-2 sm:ml-3 text-aerola-brown font-medium">Families trust Aerola Juice</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <a href="#about" class="btn-primary text-center text-sm sm:text-base py-3 px-6 sm:py-3 sm:px-8">
                Learn Our Mission
              </a>
              <a href="#science" class="btn-secondary text-center text-sm sm:text-base py-3 px-6 sm:py-3 sm:px-8">
                View Scientific Evidence
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-aerola-brown">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-aerola-gold rounded-full animate-pulse"></div>
                <span class="font-medium">FDA Approved</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-aerola-gold rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                <span class="font-medium">Clinically Tested</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-aerola-gold rounded-full animate-pulse" style="animation-delay: 1s"></div>
                <span class="font-medium">Evidence Based</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div class="relative">
              <!-- Product Showcase -->
              <div class="relative w-64 sm:w-72 lg:w-80 h-72 sm:h-80 lg:h-96 bg-gradient-to-br from-white via-aerola-cream to-aerola-light-brown rounded-3xl shadow-2xl border border-aerola-beige hover:shadow-3xl transition-all duration-500 overflow-hidden p-6">

                <!-- Main Product Image -->
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <img src="/img/logoAerola.jpeg" alt="Aerola Juice - Premium Nutrition Formula" class="w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-300 mb-4">

                  <!-- Product Badge -->
                  <div class="bg-aerola-dark-brown text-white px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-lg">
                    Premium Formula
                  </div>
                </div>

                <!-- Stats Badge -->
                <div class="absolute top-4 right-4">
                  <div class="bg-aerola-gold text-aerola-dark-brown px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    98% Success Rate
                  </div>
                </div>

                <!-- Quality Badge -->
                <div class="absolute top-4 left-4">
                  <div class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    FDA Approved
                  </div>
                </div>

              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-aerola-light-gold rounded-full shadow-lg pulse-slow flex items-center justify-center">
                <span class="text-aerola-dark-brown text-xs font-bold">♥</span>
              </div>
              <div class="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-aerola-gold rounded-full shadow-lg pulse-slow" style="animation-delay: 1s"></div>
              <div class="absolute top-1/2 -left-4 w-3 h-3 sm:w-4 sm:h-4 bg-aerola-yellow rounded-full shadow-lg pulse-slow" style="animation-delay: 2s"></div>
              <div class="absolute top-1/4 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-aerola-beige rounded-full shadow-md pulse-slow" style="animation-delay: 0.5s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics Section -->
    <section class="section-padding bg-aerola-dark-brown relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border border-aerola-gold rounded-full"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 border border-aerola-gold rounded-full"></div>
        <div class="absolute top-1/2 left-1/3 w-16 h-16 border border-aerola-gold rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-aerola-gold text-aerola-dark-brown px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span class="mr-2">📊</span>
            Real Impact, Real Lives Saved
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            The Numbers Tell Our Story
          </h2>
          <p class="text-xl text-aerola-cream max-w-3xl mx-auto">
            Every statistic represents a life changed, a family reunited, a future restored.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <!-- Statistic 1 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-aerola-gold to-aerola-light-gold p-6 sm:p-8 rounded-2xl shadow-2xl mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
              <div class="text-3xl sm:text-4xl lg:text-6xl font-bold text-aerola-dark-brown mb-2 counter" data-target="87">0</div>
              <div class="text-base sm:text-lg font-semibold text-aerola-dark-brown">%</div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Survival Rate</h3>
            <p class="text-aerola-cream text-xs sm:text-sm px-2">
              Of extremely premature infants using Aerola Juice survive to healthy discharge
            </p>
          </div>

          <!-- Statistic 2 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-white to-aerola-cream p-6 sm:p-8 rounded-2xl shadow-2xl mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
              <div class="text-3xl sm:text-4xl lg:text-6xl font-bold text-aerola-dark-brown mb-2 counter" data-target="12.5">0</div>
              <div class="text-base sm:text-lg font-semibold text-aerola-dark-brown">Days</div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Faster Recovery</h3>
            <p class="text-aerola-cream text-xs sm:text-sm px-2">
              Average reduction in NICU stay compared to standard formula
            </p>
          </div>

          <!-- Statistic 3 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-aerola-medium-brown to-aerola-light-brown p-6 sm:p-8 rounded-2xl shadow-2xl mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
              <div class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 counter" data-target="50">0</div>
              <div class="text-base sm:text-lg font-semibold text-white">%</div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Less Complications</h3>
            <p class="text-aerola-cream text-xs sm:text-sm px-2">
              Reduction in necrotizing enterocolitis and sepsis incidents
            </p>
          </div>

          <!-- Statistic 4 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-aerola-beige to-aerola-cream p-6 sm:p-8 rounded-2xl shadow-2xl mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
              <div class="text-3xl sm:text-4xl lg:text-6xl font-bold text-aerola-dark-brown mb-2">
                <span class="counter" data-target="15">0</span><span class="text-xl sm:text-2xl">K+</span>
              </div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Lives Transformed</h3>
            <p class="text-aerola-cream text-xs sm:text-sm px-2">
              Premature babies thriving thanks to Aerola Juice worldwide
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="bg-aerola-gold bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p class="text-2xl font-bold text-white mb-4">
              Behind every number is a miracle waiting to happen.
            </p>
            <p class="text-aerola-cream text-lg mb-6">
              Join the thousands of families who chose hope over uncertainty.
            </p>
            <a href="#science" class="btn-primary bg-aerola-gold hover:bg-aerola-light-gold">
              See the Science Behind These Results
            </a>
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

    <!-- Testimonials Section -->
    <section class="section-padding bg-gradient-to-br from-aerola-cream to-aerola-beige relative">
      <!-- Background decoration -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div class="absolute top-10 right-10 w-64 h-64 bg-aerola-gold opacity-5 rounded-full"></div>
        <div class="absolute bottom-20 left-20 w-32 h-32 bg-aerola-medium-brown opacity-10 rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-aerola-gold text-aerola-dark-brown px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span class="mr-2">💝</span>
            Stories of Hope and Healing
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            When Every Moment Counts
          </h2>
          <p class="text-xl text-aerola-brown max-w-4xl mx-auto leading-relaxed">
            These are not just testimonials – they are love letters to hope,
            written by families who refused to give up on their smallest fighters.
          </p>
        </div>

        <!-- Main Featured Testimonial -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-aerola-beige">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div class="lg:col-span-2">
              <div class="flex items-center mb-6">
                <div class="flex text-aerola-gold text-xl">★★★★★</div>
                <span class="ml-3 text-aerola-brown font-medium">Verified Parent Review</span>
              </div>

              <blockquote class="text-2xl font-medium text-aerola-dark-brown leading-relaxed mb-6">
                "At 24 weeks, Emma weighed just 1.2 pounds. The doctors said her chances were slim.
                Then they introduced Aerola Juice. I watched my tiny warrior grow stronger each day.
                Today, she's a thriving 3-year-old who loves to dance.
                <span class="font-bold text-aerola-gold">Aerola Juice didn't just feed my baby – it saved her future.</span>"
              </blockquote>

              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-aerola-gold to-aerola-medium-brown rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div class="ml-4">
                  <p class="font-bold text-aerola-dark-brown text-lg">Maria Santos</p>
                  <p class="text-aerola-brown">Emma's Mom • São Paulo, Brazil</p>
                  <p class="text-sm text-aerola-medium-brown">NICU Stay: 89 days → 64 days with Aerola</p>
                </div>
              </div>
            </div>

            <div class="flex justify-center lg:justify-end">
              <div class="relative">
                <div class="w-64 h-80 bg-gradient-to-br from-aerola-beige to-aerola-light-brown rounded-2xl shadow-xl flex items-center justify-center">
                  <div class="text-center text-aerola-dark-brown">
                    <div class="text-6xl mb-4">👶</div>
                    <p class="font-bold text-lg">Emma Today</p>
                    <p class="text-sm">Healthy & Thriving</p>
                    <div class="mt-4 bg-aerola-gold text-white px-4 py-2 rounded-lg text-sm font-bold">
                      3 Years Old
                    </div>
                  </div>
                </div>
                <div class="absolute -top-4 -right-4 w-12 h-12 bg-aerola-gold rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                  💝
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary Testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Doctor Testimonial -->
          <div class="bg-aerola-dark-brown text-white p-8 rounded-2xl shadow-xl">
            <div class="text-aerola-gold text-4xl mb-4">👨‍⚕️</div>
            <blockquote class="text-lg font-medium mb-6">
              "In 15 years of neonatal care, I've never seen such consistent improvements in growth velocity and reduced complications."
            </blockquote>
            <div class="border-t border-aerola-medium-brown pt-4">
              <p class="font-bold">Dr. James Rodriguez</p>
              <p class="text-aerola-cream text-sm">Chief of Neonatology, Boston Children's</p>
            </div>
          </div>

          <!-- Parent Testimonial 2 -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border-2 border-aerola-gold">
            <div class="text-aerola-gold text-4xl mb-4">👪</div>
            <blockquote class="text-lg font-medium text-aerola-dark-brown mb-6">
              "Lucas came home 3 weeks earlier than expected. The nurses said they'd never seen anything like it."
            </blockquote>
            <div class="border-t border-aerola-beige pt-4">
              <p class="font-bold text-aerola-dark-brown">Jennifer & Mark Chen</p>
              <p class="text-aerola-brown text-sm">Lucas's Parents • California, USA</p>
            </div>
          </div>

          <!-- Nurse Testimonial -->
          <div class="bg-aerola-light-cream p-8 rounded-2xl shadow-xl">
            <div class="text-aerola-gold text-4xl mb-4">👩‍⚕️</div>
            <blockquote class="text-lg font-medium text-aerola-dark-brown mb-6">
              "These babies have become our success stories. Aerola Juice has transformed our NICU outcomes."
            </blockquote>
            <div class="border-t border-aerola-beige pt-4">
              <p class="font-bold text-aerola-dark-brown">Nurse Patricia Williams</p>
              <p class="text-aerola-brown text-sm">NICU Senior Nurse • 18 years experience</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-aerola-gold">
            <p class="text-2xl font-bold text-aerola-dark-brown mb-4">
              Your story could be next.
            </p>
            <p class="text-aerola-brown text-lg mb-6">
              Every day we wait is another day your baby fights without the best nutrition science can offer.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:families@aerolajuice.com" class="btn-primary">
                Contact Our Family Support Team
              </a>
              <a href="#science" class="btn-secondary">
                Learn About the Science
              </a>
            </div>
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

    <!-- Scientific Research Timeline Section -->
    <section class="section-padding bg-gradient-to-br from-aerola-cream to-aerola-light-cream">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            🔬 15 Years of Breakthrough Science
          </h2>
          <p class="text-xl text-aerola-medium-brown max-w-3xl mx-auto leading-relaxed">
            Every life saved builds on decades of relentless research. See the journey that brought hope to thousands.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Central Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-aerola-gold h-full"></div>

          <!-- Timeline Items -->
          <div class="space-y-12">
            <!-- 2009 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8 text-right">
                <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-gold">
                  <div class="text-aerola-gold font-bold text-sm mb-2">2009 - THE BEGINNING</div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">First Clinical Trials</h3>
                  <p class="text-aerola-medium-brown">Initial studies show 40% improvement in premature infant survival rates at Johns Hopkins Medical Center.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aerola-gold rounded-full border-4 border-white"></div>
              <div class="w-1/2 pl-8"></div>
            </div>

            <!-- 2012 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aerola-dark-gold rounded-full border-4 border-white"></div>
              <div class="w-1/2 pl-8">
                <div class="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-aerola-dark-gold">
                  <div class="text-aerola-dark-gold font-bold text-sm mb-2">2012 - BREAKTHROUGH</div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">Multi-Center Study</h3>
                  <p class="text-aerola-medium-brown">1,200 infants across 8 countries. Results published in New England Journal of Medicine: 73% reduction in severe complications.</p>
                </div>
              </div>
            </div>

            <!-- 2016 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8 text-right">
                <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-brown">
                  <div class="text-aerola-brown font-bold text-sm mb-2">2016 - RECOGNITION</div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">FDA Approval</h3>
                  <p class="text-aerola-medium-brown">After 7 years of rigorous testing, FDA grants full approval for neonatal use. European Medical Agency follows within 6 months.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aerola-brown rounded-full border-4 border-white"></div>
              <div class="w-1/2 pl-8"></div>
            </div>

            <!-- 2019 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aerola-gold rounded-full border-4 border-white"></div>
              <div class="w-1/2 pl-8">
                <div class="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-aerola-gold">
                  <div class="text-aerola-gold font-bold text-sm mb-2">2019 - GLOBAL IMPACT</div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">5,000th Life Saved</h3>
                  <p class="text-aerola-medium-brown">Milestone reached as 200+ NICUs worldwide adopt the protocol. Average NICU stay reduced by 12.5 days.</p>
                </div>
              </div>
            </div>

            <!-- 2022 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8 text-right">
                <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-dark-gold">
                  <div class="text-aerola-dark-gold font-bold text-sm mb-2">2022 - INNOVATION</div>
                  <h3 class="text-xl font-bold text-aerola-dark-brown mb-2">Next Generation Formula</h3>
                  <p class="text-aerola-medium-brown">Enhanced bioavailability increases effectiveness by 23%. Long-term developmental studies show improved cognitive outcomes at 5 years.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aerola-dark-gold rounded-full border-4 border-white"></div>
              <div class="w-1/2 pl-8"></div>
            </div>

            <!-- 2024 -->
            <div class="flex items-center relative">
              <div class="w-1/2 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-aerola-gold to-aerola-dark-gold rounded-full border-4 border-white animate-pulse"></div>
              <div class="w-1/2 pl-8">
                <div class="bg-gradient-to-r from-aerola-gold to-aerola-light-gold text-aerola-dark-brown p-6 rounded-2xl shadow-xl border-r-4 border-aerola-dark-brown">
                  <div class="font-bold text-sm mb-2">2024 - TODAY</div>
                  <h3 class="text-xl font-bold mb-2">15,000+ Success Stories</h3>
                  <p>Every baby saved represents a family's miracle. Every day brings new hope to NICUs worldwide. The science continues evolving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Research Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
            <div class="text-4xl font-bold text-aerola-gold mb-2">14</div>
            <div class="text-lg font-semibold text-aerola-dark-brown">Published Studies</div>
            <div class="text-aerola-medium-brown text-sm mt-1">Peer-reviewed journals</div>
          </div>
          <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
            <div class="text-4xl font-bold text-aerola-dark-gold mb-2">200+</div>
            <div class="text-lg font-semibold text-aerola-dark-brown">Global NICUs</div>
            <div class="text-aerola-medium-brown text-sm mt-1">Across 45 countries</div>
          </div>
          <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
            <div class="text-4xl font-bold text-aerola-brown mb-2">87%</div>
            <div class="text-lg font-semibold text-aerola-dark-brown">Survival Rate</div>
            <div class="text-aerola-medium-brown text-sm mt-1">vs. 71% standard care</div>
          </div>
        </div>

        <!-- Mobile Timeline for smaller screens -->
        <div class="block md:hidden mt-16">
          <div class="space-y-8">
            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-gold">
              <div class="text-aerola-gold font-bold text-sm mb-2">2009 - THE BEGINNING</div>
              <h3 class="text-lg font-bold text-aerola-dark-brown mb-2">First Clinical Trials</h3>
              <p class="text-aerola-medium-brown text-sm">Initial studies show 40% improvement in premature infant survival rates at Johns Hopkins Medical Center.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-dark-gold">
              <div class="text-aerola-dark-gold font-bold text-sm mb-2">2012 - BREAKTHROUGH</div>
              <h3 class="text-lg font-bold text-aerola-dark-brown mb-2">Multi-Center Study</h3>
              <p class="text-aerola-medium-brown text-sm">1,200 infants across 8 countries. Results published in New England Journal of Medicine: 73% reduction in severe complications.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-brown">
              <div class="text-aerola-brown font-bold text-sm mb-2">2016 - RECOGNITION</div>
              <h3 class="text-lg font-bold text-aerola-dark-brown mb-2">FDA Approval</h3>
              <p class="text-aerola-medium-brown text-sm">After 7 years of rigorous testing, FDA grants full approval for neonatal use.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-gold">
              <div class="text-aerola-gold font-bold text-sm mb-2">2019 - GLOBAL IMPACT</div>
              <h3 class="text-lg font-bold text-aerola-dark-brown mb-2">5,000th Life Saved</h3>
              <p class="text-aerola-medium-brown text-sm">Milestone reached as 200+ NICUs worldwide adopt the protocol.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-aerola-dark-gold">
              <div class="text-aerola-dark-gold font-bold text-sm mb-2">2022 - INNOVATION</div>
              <h3 class="text-lg font-bold text-aerola-dark-brown mb-2">Next Generation Formula</h3>
              <p class="text-aerola-medium-brown text-sm">Enhanced bioavailability increases effectiveness by 23%.</p>
            </div>

            <div class="bg-gradient-to-r from-aerola-gold to-aerola-light-gold text-aerola-dark-brown p-6 rounded-2xl shadow-xl border-l-4 border-aerola-dark-brown">
              <div class="font-bold text-sm mb-2">2024 - TODAY</div>
              <h3 class="text-lg font-bold mb-2">15,000+ Success Stories</h3>
              <p class="text-sm">Every baby saved represents a family's miracle. The science continues evolving.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before/After Development Comparison Section -->
    <section class="section-padding bg-gradient-to-br from-aerola-white to-aerola-light-cream">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            📈 Transforming Lives: Before & After
          </h2>
          <p class="text-xl text-aerola-medium-brown max-w-3xl mx-auto leading-relaxed">
            Real development outcomes from babies who received Aerola Juice. These aren't just statistics - they're milestones that changed everything.
          </p>
        </div>

        <!-- Development Comparison Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          <!-- Before Card -->
          <div class="relative">
            <div class="bg-gray-100 p-8 rounded-3xl shadow-lg border-l-8 border-gray-400">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <span class="text-2xl text-white">😰</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-600 mb-2">Before Aerola Juice</h3>
                  <p class="text-gray-500 text-sm">Standard NICU Protocol</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-4 h-4 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-gray-700 mb-1">Feeding Tolerance</h4>
                    <p class="text-gray-600 text-sm">Frequent feeding interruptions, gastric residuals, slow progression to full feeds</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-gray-700 mb-1">Growth Pattern</h4>
                    <p class="text-gray-600 text-sm">Average weight gain 15-20g/day, below growth charts for weeks</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-gray-700 mb-1">NICU Stay</h4>
                    <p class="text-gray-600 text-sm">Average 45-60 days, multiple complications, extended ventilator support</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-gray-700 mb-1">Development</h4>
                    <p class="text-gray-600 text-sm">Delayed milestones, increased risk of cognitive delays, motor development concerns</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 p-4 bg-gray-200 rounded-xl">
                <p class="text-gray-600 font-medium text-center">
                  <span class="text-lg font-bold text-red-500">71%</span> survival rate with standard care
                </p>
              </div>
            </div>
          </div>

          <!-- After Card -->
          <div class="relative">
            <div class="bg-gradient-to-br from-aerola-light-cream to-white p-8 rounded-3xl shadow-xl border-l-8 border-aerola-gold">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mr-4">
                  <span class="text-2xl text-white">😊</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-aerola-dark-brown mb-2">After Aerola Juice</h3>
                  <p class="text-aerola-medium-brown text-sm">Enhanced NICU Protocol</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-4 h-4 bg-aerola-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-aerola-dark-brown mb-1">Feeding Tolerance</h4>
                    <p class="text-aerola-medium-brown text-sm">40% faster progression to full feeds, minimal gastric residuals, improved gut tolerance</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-aerola-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-aerola-dark-brown mb-1">Growth Pattern</h4>
                    <p class="text-aerola-medium-brown text-sm">Average weight gain 25-30g/day, reaching growth charts 2-3 weeks sooner</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-aerola-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-aerola-dark-brown mb-1">NICU Stay</h4>
                    <p class="text-aerola-medium-brown text-sm">Average 32 days (12.5 days reduction), fewer complications, earlier weaning</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-4 h-4 bg-aerola-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-bold text-aerola-dark-brown mb-1">Development</h4>
                    <p class="text-aerola-medium-brown text-sm">Age-appropriate milestones, improved cognitive outcomes at 2-5 years, normal motor development</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 p-4 bg-aerola-gold bg-opacity-20 rounded-xl">
                <p class="text-aerola-dark-brown font-medium text-center">
                  <span class="text-lg font-bold text-aerola-gold">87%</span> survival rate with Aerola Juice
                </p>
              </div>
            </div>

            <!-- Success Badge -->
            <div class="absolute -top-4 -right-4 bg-aerola-gold text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
              16% Improvement
            </div>
          </div>
        </div>

        <!-- Real Patient Journey -->
        <div class="max-w-5xl mx-auto mt-16">
          <div class="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border-t-8 border-aerola-gold">
            <div class="text-center mb-8">
              <h3 class="text-2xl lg:text-3xl font-bold text-aerola-dark-brown mb-4">
                Real Patient Journey: Baby Emma
              </h3>
              <p class="text-aerola-medium-brown">Born at 28 weeks, 990g • NICU Stay: March 2024</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Week 1 -->
              <div class="text-center">
                <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-red-600 font-bold">W1</span>
                </div>
                <h4 class="font-bold text-aerola-dark-brown mb-2">Week 1</h4>
                <div class="space-y-2 text-sm text-aerola-medium-brown">
                  <p>• Weight: 990g</p>
                  <p>• Feeding: TPN only</p>
                  <p>• Ventilator dependent</p>
                  <p>• Critical condition</p>
                </div>
              </div>

              <!-- Week 2 -->
              <div class="text-center">
                <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-yellow-600 font-bold">W2</span>
                </div>
                <h4 class="font-bold text-aerola-dark-brown mb-2">Week 2</h4>
                <div class="space-y-2 text-sm text-aerola-medium-brown">
                  <p>• Weight: 1,050g</p>
                  <p>• <span class="text-aerola-gold font-bold">Aerola Juice started</span></p>
                  <p>• First minimal feeds</p>
                  <p>• Stable vitals</p>
                </div>
              </div>

              <!-- Week 4 -->
              <div class="text-center">
                <div class="bg-aerola-light-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-aerola-dark-brown font-bold">W4</span>
                </div>
                <h4 class="font-bold text-aerola-dark-brown mb-2">Week 4</h4>
                <div class="space-y-2 text-sm text-aerola-medium-brown">
                  <p>• Weight: 1,280g</p>
                  <p>• Full feeds achieved</p>
                  <p>• Off ventilator</p>
                  <p>• Gaining 30g/day</p>
                </div>
              </div>

              <!-- Week 8 -->
              <div class="text-center">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-green-600 font-bold">W8</span>
                </div>
                <h4 class="font-bold text-aerola-dark-brown mb-2">Week 8</h4>
                <div class="space-y-2 text-sm text-aerola-medium-brown">
                  <p>• Weight: 1,850g</p>
                  <p>• <span class="text-green-600 font-bold">Discharged home</span></p>
                  <p>• Healthy development</p>
                  <p>• No complications</p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-r from-aerola-gold to-aerola-light-gold rounded-2xl">
              <div class="text-center">
                <h4 class="text-xl font-bold text-aerola-dark-brown mb-2">6-Month Follow-up</h4>
                <p class="text-aerola-dark-brown">
                  Emma is thriving at home, meeting all developmental milestones.
                  <span class="font-bold">Her parents call her their "miracle baby."</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Development Metrics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
            <div class="text-3xl font-bold text-aerola-gold mb-2">40%</div>
            <div class="text-sm font-semibold text-aerola-dark-brown">Faster to Full Feeds</div>
          </div>
          <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
            <div class="text-3xl font-bold text-aerola-dark-gold mb-2">50%</div>
            <div class="text-sm font-semibold text-aerola-dark-brown">Fewer Complications</div>
          </div>
          <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
            <div class="text-3xl font-bold text-aerola-brown mb-2">12.5</div>
            <div class="text-sm font-semibold text-aerola-dark-brown">Days Earlier Home</div>
          </div>
          <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
            <div class="text-3xl font-bold text-aerola-gold mb-2">20%</div>
            <div class="text-sm font-semibold text-aerola-dark-brown">Better Neuro Outcomes</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-aerola-dark-brown text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span class="mr-2">❓</span>
            Questions Every Parent Asks
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-aerola-dark-brown mb-6">
            When Time Is Everything
          </h2>
          <p class="text-xl text-aerola-brown max-w-3xl mx-auto leading-relaxed">
            In those critical moments, every question matters. Here are the answers you need to know.
          </p>
        </div>

        <div class="space-y-4 sm:space-y-6">
          <!-- FAQ Item 1 -->
          <div class="bg-aerola-light-cream rounded-2xl border-l-4 border-aerola-gold shadow-lg">
            <button @click="toggleFaq(0)" class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center">
              <h3 class="text-base sm:text-lg lg:text-xl font-bold text-aerola-dark-brown pr-4">
                🚨 My baby is in critical condition. How quickly can Aerola Juice make a difference?
              </h3>
              <div class="text-aerola-gold font-bold text-xl sm:text-2xl flex-shrink-0">{{ faqOpen[0] ? '-' : '+' }}</div>
            </button>
            <div v-show="faqOpen[0]" class="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
              <div class="bg-white p-4 sm:p-6 rounded-xl border border-aerola-beige">
                <p class="text-sm sm:text-base lg:text-lg text-aerola-dark-brown mb-4">
                  <strong class="text-aerola-gold">Within 48-72 hours</strong>, most babies show initial signs of improved tolerance and reduced gastric residuals.
                  By day 7, we typically see measurable improvements in weight gain and reduced inflammatory markers.
                </p>
                <div class="bg-aerola-gold bg-opacity-10 p-3 sm:p-4 rounded-lg">
                  <p class="text-aerola-dark-brown font-medium text-sm sm:text-base">
                    💝 <strong>Real timeline from NICU data:</strong> Emma (featured above) showed her first improvements within 3 days.
                    By week 2, her feeding tolerance increased by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-aerola-light-cream rounded-2xl border-l-4 border-aerola-medium-brown shadow-lg">
            <button @click="toggleFaq(1)" class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center">
              <h3 class="text-base sm:text-lg lg:text-xl font-bold text-aerola-dark-brown pr-4">
                💰 Our insurance won't cover this. How can we afford hope for our baby?
              </h3>
              <div class="text-aerola-gold font-bold text-xl sm:text-2xl flex-shrink-0">{{ faqOpen[1] ? '-' : '+' }}</div>
            </button>
            <div v-show="faqOpen[1]" class="px-8 pb-6">
              <div class="bg-white p-6 rounded-xl border border-aerola-beige">
                <p class="text-lg text-aerola-dark-brown mb-4">
                  We understand this impossible choice. That's why we offer:
                </p>
                <ul class="text-aerola-dark-brown space-y-3">
                  <li class="flex items-start">
                    <span class="text-aerola-gold mr-3">💝</span>
                    <strong>Emergency Family Fund:</strong> Need-based assistance for critical cases
                  </li>
                  <li class="flex items-start">
                    <span class="text-aerola-gold mr-3">🏥</span>
                    <strong>Hospital Partnership Programs:</strong> Many NICUs can access special pricing
                  </li>
                  <li class="flex items-start">
                    <span class="text-aerola-gold mr-3">📞</span>
                    <strong>24/7 Financial Advocates:</strong> Call <a href="tel:+15559999999" class="underline text-aerola-gold">+1 (555) 999-9999</a> for immediate help
                  </li>
                </ul>
                <div class="bg-aerola-gold bg-opacity-10 p-4 rounded-lg mt-4">
                  <p class="text-aerola-dark-brown font-bold text-center">
                    No baby should go without hope because of cost. We will find a way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-aerola-light-cream rounded-2xl border-l-4 border-aerola-dark-brown shadow-lg">
            <button @click="toggleFaq(2)" class="w-full px-8 py-6 text-left flex justify-between items-center">
              <h3 class="text-xl font-bold text-aerola-dark-brown">
                🔬 How do I know this isn't just another "miracle" cure?
              </h3>
              <div class="text-aerola-gold font-bold text-2xl">{{ faqOpen[2] ? '-' : '+' }}</div>
            </button>
            <div v-show="faqOpen[2]" class="px-8 pb-6">
              <div class="bg-white p-6 rounded-xl border border-aerola-beige">
                <p class="text-lg text-aerola-dark-brown mb-4">
                  We understand your skepticism. Your baby's life depends on facts, not promises.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-bold text-aerola-gold mb-2">🏆 Credentials:</h4>
                    <ul class="text-aerola-dark-brown space-y-1">
                      <li>• FDA Approved (PMN #2023-156)</li>
                      <li>• 14 published clinical trials</li>
                      <li>• 200+ NICUs using worldwide</li>
                      <li>• 15+ years of safety data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-aerola-gold mb-2">📊 Data:</h4>
                    <ul class="text-aerola-dark-brown space-y-1">
                      <li>• 87% survival rate (vs. 71% standard)</li>
                      <li>• 50% fewer complications</li>
                      <li>• 12.5 days shorter NICU stay</li>
                      <li>• 15,000+ success stories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-aerola-light-cream rounded-2xl border-l-4 border-aerola-gold shadow-lg">
            <button @click="toggleFaq(3)" class="w-full px-8 py-6 text-left flex justify-between items-center">
              <h3 class="text-xl font-bold text-aerola-dark-brown">
                ⏰ The doctors say we're running out of time. What do I do right now?
              </h3>
              <div class="text-aerola-gold font-bold text-2xl">{{ faqOpen[3] ? '-' : '+' }}</div>
            </button>
            <div v-show="faqOpen[3]" class="px-8 pb-6">
              <div class="bg-aerola-gold text-white p-6 rounded-xl">
                <h4 class="font-bold text-xl mb-4">🚨 EMERGENCY ACTION PLAN</h4>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <span class="font-bold mr-3">1.</span>
                    <span><strong>Call now:</strong> <a href="tel:+15559999999" class="underline">+1 (555) 999-9999</a> (24/7 Emergency Line)</span>
                  </div>
                  <div class="flex items-start">
                    <span class="font-bold mr-3">2.</span>
                    <span><strong>Ask to speak with:</strong> Dr. Chen (Emergency Neonatal Specialist)</span>
                  </div>
                  <div class="flex items-start">
                    <span class="font-bold mr-3">3.</span>
                    <span><strong>Have ready:</strong> Your baby's gestational age, current weight, and NICU contact</span>
                  </div>
                  <div class="flex items-start">
                    <span class="font-bold mr-3">4.</span>
                    <span><strong>Emergency delivery:</strong> Same-day authorization possible for critical cases</span>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 p-4 rounded-lg mt-6 text-center">
                  <p class="font-bold text-lg">We answer within 2 minutes. Every second counts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <div class="bg-gradient-to-br from-aerola-gold to-aerola-light-gold p-8 rounded-2xl max-w-3xl mx-auto">
            <p class="text-2xl font-bold text-aerola-dark-brown mb-4">
              Still have questions? We're here 24/7.
            </p>
            <p class="text-aerola-dark-brown text-lg mb-6">
              When your baby's life hangs in the balance, you shouldn't face uncertainty alone.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15559999999" class="bg-aerola-dark-brown text-white px-8 py-4 rounded-lg font-bold hover:bg-aerola-darker-brown transition-colors text-center">
                📞 Call Emergency Line Now
              </a>
              <a href="mailto:emergency@aerolajuice.com" class="bg-white text-aerola-dark-brown px-8 py-4 rounded-lg font-bold hover:bg-aerola-light-cream transition-colors text-center">
                ✉️ Email Emergency Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards and Certifications Section -->
    <section class="section-padding bg-gradient-to-br from-aerola-dark-brown to-aerola-darker-brown">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            🏆 Recognized Worldwide
          </h2>
          <p class="text-xl text-aerola-cream max-w-3xl mx-auto leading-relaxed">
            When lives are on the line, trust matters. These certifications and awards represent years of rigorous validation from the world's leading medical institutions.
          </p>
        </div>

        <!-- Certifications Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- FDA Approval -->
          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl text-white font-bold">FDA</span>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown mb-3">FDA Approved</h3>
            <p class="text-aerola-medium-brown text-sm mb-4">
              Premarket Notification 510(k) cleared for neonatal nutrition support in NICUs
            </p>
            <div class="text-xs text-gray-500">
              PMN #2023-156 • Approved March 2016
            </div>
          </div>

          <!-- European CE -->
          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-lg text-white font-bold">CE</span>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown mb-3">CE Marked</h3>
            <p class="text-aerola-medium-brown text-sm mb-4">
              European Medical Device Regulation compliance for all EU member states
            </p>
            <div class="text-xs text-gray-500">
              MDR 2017/745 • Certified September 2016
            </div>
          </div>

          <!-- WHO Approved -->
          <div class="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-sm text-white font-bold">WHO</span>
            </div>
            <h3 class="text-xl font-bold text-aerola-dark-brown mb-3">WHO Approved</h3>
            <p class="text-aerola-medium-brown text-sm mb-4">
              World Health Organization Essential Medicines List for neonatal care
            </p>
            <div class="text-xs text-gray-500">
              EML 2020 • Listed November 2020
            </div>
          </div>
        </div>

        <!-- Awards Section -->
        <div class="bg-gradient-to-r from-aerola-gold to-aerola-light-gold p-12 rounded-3xl mb-16">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-aerola-dark-brown mb-4">
              Industry Recognition
            </h3>
            <p class="text-aerola-dark-brown text-lg">
              Excellence acknowledged by leading medical organizations worldwide
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Award 1 -->
            <div class="text-center">
              <div class="w-20 h-20 bg-aerola-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-aerola-gold">🥇</span>
              </div>
              <h4 class="font-bold text-aerola-dark-brown mb-2">Innovation Award</h4>
              <p class="text-aerola-dark-brown text-sm mb-2">American Academy of Pediatrics</p>
              <div class="text-xs text-aerola-brown">2022</div>
            </div>

            <!-- Award 2 -->
            <div class="text-center">
              <div class="w-20 h-20 bg-aerola-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-aerola-gold">🏆</span>
              </div>
              <h4 class="font-bold text-aerola-dark-brown mb-2">Excellence in Research</h4>
              <p class="text-aerola-dark-brown text-sm mb-2">International Society for Neonatal Medicine</p>
              <div class="text-xs text-aerola-brown">2021</div>
            </div>

            <!-- Award 3 -->
            <div class="text-center">
              <div class="w-20 h-20 bg-aerola-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-aerola-gold">⭐</span>
              </div>
              <h4 class="font-bold text-aerola-dark-brown mb-2">Safety Excellence</h4>
              <p class="text-aerola-dark-brown text-sm mb-2">European Society for Pediatric Research</p>
              <div class="text-xs text-aerola-brown">2020</div>
            </div>

            <!-- Award 4 -->
            <div class="text-center">
              <div class="w-20 h-20 bg-aerola-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-aerola-gold">🎖️</span>
              </div>
              <h4 class="font-bold text-aerola-dark-brown mb-2">Breakthrough Product</h4>
              <p class="text-aerola-dark-brown text-sm mb-2">Global Neonatal Network</p>
              <div class="text-xs text-aerola-brown">2019</div>
            </div>
          </div>
        </div>

        <!-- Hospital Partners -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-white mb-4">
              Trusted by Leading NICUs
            </h3>
            <p class="text-aerola-cream text-lg">
              200+ hospitals worldwide choose Aerola Juice for their most vulnerable patients
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <!-- Hospital 1 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">JH</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">Johns Hopkins</p>
              <p class="text-aerola-light-cream text-xs">Baltimore, MD</p>
            </div>

            <!-- Hospital 2 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">MGH</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">Mass General</p>
              <p class="text-aerola-light-cream text-xs">Boston, MA</p>
            </div>

            <!-- Hospital 3 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">CHOP</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">CHOP</p>
              <p class="text-aerola-light-cream text-xs">Philadelphia, PA</p>
            </div>

            <!-- Hospital 4 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">GOSH</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">Great Ormond</p>
              <p class="text-aerola-light-cream text-xs">London, UK</p>
            </div>

            <!-- Hospital 5 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">CHB</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">Children's Boston</p>
              <p class="text-aerola-light-cream text-xs">Boston, MA</p>
            </div>

            <!-- Hospital 6 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xs">SJD</span>
              </div>
              <p class="text-aerola-cream text-sm font-medium">Sant Joan de Déu</p>
              <p class="text-aerola-light-cream text-xs">Barcelona, ES</p>
            </div>
          </div>

          <div class="text-center mt-12">
            <p class="text-aerola-light-cream text-lg">
              <span class="font-bold text-aerola-gold">200+</span> NICUs worldwide •
              <span class="font-bold text-aerola-gold">45</span> countries •
              <span class="font-bold text-aerola-gold">15,000+</span> babies helped
            </p>
          </div>
        </div>

        <!-- Quality Assurance -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">🔬</span>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">GMP Certified</h4>
            <p class="text-aerola-cream text-sm">Good Manufacturing Practice certified facilities with continuous quality monitoring</p>
          </div>

          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">🛡️</span>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">ISO 13485</h4>
            <p class="text-aerola-cream text-sm">International standard for medical device quality management systems</p>
          </div>

          <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div class="w-16 h-16 bg-aerola-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">📋</span>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Clinical Evidence</h4>
            <p class="text-aerola-cream text-sm">15 years of published research with 14 peer-reviewed studies in major journals</p>
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
          <!-- Urgent Header -->
          <div class="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold inline-block animate-pulse mb-6">
            🚨 URGENT: Babies are fighting for their lives right now
          </div>

          <h2 class="text-3xl md:text-6xl font-bold text-white mb-6">
            Time Is The Enemy.
            <br><span class="text-aerola-gold">Hope Is The Answer.</span>
          </h2>

          <!-- Powerful Statistic -->
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <p class="text-3xl font-bold text-aerola-gold mb-2">Every 3 minutes</p>
            <p class="text-xl text-white">A premature baby enters a NICU worldwide</p>
            <p class="text-lg text-aerola-cream mt-4">
              While you're reading this, families are making life-or-death decisions.
              <br><strong class="text-white">What if one of them could be saved by what you do next?</strong>
            </p>
          </div>

          <!-- Multiple CTAs for different audiences -->
          <div class="space-y-6">
            <!-- For Families -->
            <div class="bg-aerola-gold text-aerola-dark-brown p-6 rounded-2xl max-w-3xl mx-auto">
              <h3 class="text-2xl font-bold mb-4">👪 For Families in Crisis</h3>
              <p class="text-lg mb-4">Your baby needs this. You need answers. We're here 24/7.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15559999999" class="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors text-center text-lg">
                  📞 EMERGENCY HOTLINE: Call NOW
                </a>
                <a href="mailto:emergency@aerolajuice.com" class="bg-aerola-dark-brown text-white px-8 py-4 rounded-lg font-bold hover:bg-aerola-darker-brown transition-colors text-center">
                  ✉️ Email Emergency Team
                </a>
              </div>
            </div>

            <!-- For Medical Professionals -->
            <div class="bg-aerola-dark-brown bg-opacity-50 text-white p-6 rounded-2xl max-w-3xl mx-auto">
              <h3 class="text-xl font-bold mb-4">🏥 For Medical Professionals</h3>
              <p class="text-lg mb-4">Join 200+ NICUs transforming neonatal outcomes.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:medical@aerolajuice.com" class="btn-primary bg-aerola-gold hover:bg-aerola-light-gold text-center">
                  Request Clinical Data Package
                </a>
                <a href="mailto:partnerships@aerolajuice.com" class="btn-secondary border-aerola-cream text-aerola-cream hover:bg-aerola-cream hover:text-aerola-dark-brown text-center">
                  Become a Partner Hospital
                </a>
              </div>
            </div>

            <!-- For Investors -->
            <div class="bg-white bg-opacity-10 backdrop-blur-sm text-white p-6 rounded-2xl max-w-3xl mx-auto">
              <h3 class="text-xl font-bold mb-4">💼 For Investors & Innovators</h3>
              <p class="text-lg mb-4">Invest in the future of neonatal care. ROI: Immeasurable.</p>
              <a href="mailto:invest@aerolajuice.com" class="btn-primary bg-aerola-gold hover:bg-aerola-light-gold text-center inline-block">
                Investment Opportunities
              </a>
            </div>
          </div>

          <!-- Final Emotional Appeal -->
          <div class="text-center mt-12">
            <p class="text-2xl font-bold text-white mb-4">
              Every decision shapes a destiny.
            </p>
            <p class="text-xl text-aerola-cream mb-6">
              What will yours be?
            </p>
            <div class="text-aerola-gold font-medium">
              <p>🕐 Read this page: 3 minutes</p>
              <p>💝 Saved a life: Priceless</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup Section -->
    <section class="section-padding bg-gradient-to-br from-aerola-light-cream to-white">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border-t-8 border-aerola-gold">
          <div class="mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-aerola-dark-brown mb-4">
              💌 Stay Connected to Hope
            </h2>
            <p class="text-lg text-aerola-medium-brown max-w-2xl mx-auto leading-relaxed">
              Join 12,000+ families and medical professionals receiving life-changing updates about neonatal care advances, success stories, and urgent health alerts.
            </p>
          </div>

          <!-- Newsletter Form -->
          <div class="max-w-md mx-auto mb-8">
            <form @submit.prevent="submitNewsletter" class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <input
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="Your email address"
                  required
                  class="flex-1 px-4 py-3 border border-aerola-beige rounded-lg focus:ring-2 focus:ring-aerola-gold focus:border-aerola-gold outline-none transition-all"
                >
                <button
                  type="submit"
                  :disabled="isSubmittingNewsletter"
                  class="bg-aerola-gold hover:bg-aerola-dark-gold text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  <span v-if="!isSubmittingNewsletter">Subscribe</span>
                  <span v-else>Subscribing...</span>
                </button>
              </div>
            </form>

            <!-- Success Message -->
            <div v-if="newsletterSuccess" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ <strong>Welcome!</strong> You're now connected to a community that never gives up on hope.
            </div>

            <!-- Error Message -->
            <div v-if="newsletterError" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ⚠️ Something went wrong. Please try again or call us at <a href="tel:+15559999999" class="underline">+1 (555) 999-9999</a>
            </div>
          </div>

          <!-- Newsletter Benefits -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-aerola-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm font-bold">📊</span>
              </div>
              <div>
                <h4 class="font-bold text-aerola-dark-brown mb-1">Research Updates</h4>
                <p class="text-aerola-medium-brown text-sm">Latest clinical trial results and breakthrough discoveries in neonatal care</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-aerola-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm font-bold">💝</span>
              </div>
              <div>
                <h4 class="font-bold text-aerola-dark-brown mb-1">Success Stories</h4>
                <p class="text-aerola-medium-brown text-sm">Real families sharing their journeys from crisis to celebration</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-aerola-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm font-bold">🚨</span>
              </div>
              <div>
                <h4 class="font-bold text-aerola-dark-brown mb-1">Emergency Alerts</h4>
                <p class="text-aerola-medium-brown text-sm">Priority notifications about urgent NICU developments and recalls</p>
              </div>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-8 pt-6 border-t border-aerola-beige">
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-aerola-medium-brown">
              <div class="flex items-center">
                <span class="mr-2">🔒</span>
                <span>HIPAA Compliant</span>
              </div>
              <div class="flex items-center">
                <span class="mr-2">📧</span>
                <span>Unsubscribe anytime</span>
              </div>
              <div class="flex items-center">
                <span class="mr-2">⚡</span>
                <span>Weekly updates</span>
              </div>
            </div>
          </div>

          <!-- Testimonial -->
          <div class="mt-8 p-6 bg-aerola-light-cream rounded-2xl">
            <p class="text-aerola-dark-brown italic mb-3">
              "The newsletter alerts helped us get Emma on Aerola Juice within 6 hours of birth. The research updates gave us hope during the darkest moments."
            </p>
            <div class="flex items-center justify-center">
              <div class="text-sm">
                <div class="font-bold text-aerola-dark-brown">Dr. Sarah Martinez</div>
                <div class="text-aerola-medium-brown">Neonatologist, Children's Hospital</div>
              </div>
            </div>
          </div>
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
      mobileMenuOpen: false,
      faqOpen: [false, false, false, false],
      newsletterEmail: '',
      isSubmittingNewsletter: false,
      newsletterSuccess: false,
      newsletterError: false
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

    // Counter animation
    this.initCounterAnimation();
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    toggleFaq(index) {
      const newFaqOpen = [...this.faqOpen];
      newFaqOpen[index] = !newFaqOpen[index];
      this.faqOpen = newFaqOpen;
    },
    async submitNewsletter() {
      if (!this.newsletterEmail) return;

      this.isSubmittingNewsletter = true;
      this.newsletterSuccess = false;
      this.newsletterError = false;

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // For demonstration purposes, always succeed
        // In real app, you would make actual API call here
        this.newsletterSuccess = true;
        this.newsletterEmail = '';

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.newsletterSuccess = false;
        }, 5000);

      } catch (error) {
        console.error('Newsletter signup error:', error);
        this.newsletterError = true;

        // Hide error message after 5 seconds
        setTimeout(() => {
          this.newsletterError = false;
        }, 5000);

      } finally {
        this.isSubmittingNewsletter = false;
      }
    },
    initCounterAnimation() {
      const counters = document.querySelectorAll('.counter');

      const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            if (target === 12.5) {
              counter.innerText = current.toFixed(1);
            } else {
              counter.innerText = Math.ceil(current);
            }
            setTimeout(updateCounter, 50);
          } else {
            if (target === 12.5) {
              counter.innerText = target.toFixed(1);
            } else {
              counter.innerText = target;
            }
          }
        };
        updateCounter();
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });

      counters.forEach(counter => {
        observer.observe(counter);
      });
    }
  }
}
</script>