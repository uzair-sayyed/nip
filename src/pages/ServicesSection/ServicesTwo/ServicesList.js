import img1 from "../../../assets/projectImg/img1.webp";
import img2 from "../../../assets/projectImg/img2.webp";
import img3 from "../../../assets/projectImg/img3.webp";
import atlantaa from "../../../assets/Images/portfolioimg/atlantaa.png";
import oneagency from "../../../assets/Images/portfolioimg/oneagency.png";
import rajinteriors from "../../../assets/Images/portfolioimg/rajinteriors.png";

const servicesData = [
  {
    id: 1,
    serviceName: "Website Design",
    detail:
      "Crafting visually appealing and user-friendly websites tailored to your brand and goals.",
    btnInitialText: "Website Design",
    btnFlippedText: "Let's go!",
    btnWidth: "180",
    detailPage: {
      detailPageBanner: {
        heading: "Website Design: Crafting Digital Experiences",
        content:
          "At Nipralo Technologies, we believe in designing websites that are not just visually stunning but also deeply functional. Our goal is to create digital experiences that resonate with your brand and engage your audience effectively.",
      },
      detailPageServicePoints: {
        heading1: "Our Expertise",
        heading2: "Tailored Web Solutions",
        content:
          "Our team excels in creating custom websites that are not just aesthetically pleasing but also optimized for performance. We understand the nuances of different industries, ensuring that every website we design meets specific business objectives.",
        servicePoints: [
          {
            heading: "Corporate Websites",
            content:
              "Elevate Your Brand Identity We design corporate websites that reflect your brand's professionalism and help you generate high-quality leads. Our solutions are customized to align with your business goals.",
          },
          {
            heading: "E-commerce Platforms",
            content:
              "Boost Sales with Intuitive Design We build user-friendly e-commerce platforms that enhance customer engagement and drive sales. From design to implementation, we handle all aspects of your online store.",
          },
          {
            heading: "Personal Websites",
            content:
              "Showcase Your Passion Our personal website designs help you connect with your audience on a deeper level. We tailor each design to reflect your unique style and message.",
          },
          {
            heading: "Blogs",
            content:
              "Your Voice, Amplified We create dynamic and visually appealing blogs that amplify your message and engage your audience. Whether standardized or customized, our designs are built to make an impact.",
          },
          {
            heading: "Portfolios",
            content:
              "Highlight Your Best Work We design stunning portfolio websites that showcase your talents and achievements, helping you stand out in your industry.",
          },
          {
            heading: "Web Portals",
            content:
              "Comprehensive Online Solutions Our web portal solutions enhance the functionality of your existing site with features like live chats, payment gateways, and more, all tailored to your business needs.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Completed Projects: Websites That Deliver Impact",
        content:
          "We have successfully designed and developed websites that not only meet but exceed our clients' expectations. Each project is a testament to our commitment to quality and innovation.",
        portfolioDetail: [
          {
            id: 1,
            title: "Atlantaa Limited",
            tech: ["Web Design", "Website Development"],
            img: atlantaa,
            link: "https://atlantaalimited.com/",
            titledelay: 0.2,
            category: "Website Design & Development",
          },
          {
            id: 2,
            title: "One Agency",
            tech: ["Web Design", "Website Development"],
            img: oneagency,
            link: "https://oneagency.co.in/",
            titledelay: 0.2,
            category: "Website Design & Development",
          },
          {
            id: 3,
            title: "Raj Interiors",
            tech: ["Web Design", "Website Development"],
            img: rajinteriors,
            link: "https://rajinteriors.co/",
            titledelay: 0.2,
            category: "Website Design & Development",
          }
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Website Design?",
        content:
          "Some of the most frequently asked questions about our custom website design services include",
        processPoints: [
          {
            title: "Excellence in Every Pixel",
            content:
              "Choosing Nipralo Technologies means partnering with experts who understand the intricacies of web design. Our tailored solutions are crafted to drive success in the digital landscape.",
          },
          {
            title: "Mobile-Friendliness",
            content:
              "Our designs ensure a seamless experience across all devices, maximizing your reach and engagement.",
          },
          {
            title: "Superior UX",
            content:
              "We prioritize user experience, creating intuitive navigation and responsive designs that keep users engaged.",
          },
          {
            title: "Simplicity",
            content:
              "Our clean and fast-loading designs enhance usability while maintaining a professional appearance.",
          },
          {
            title: "Multimedia Integration",
            content:
              "We enrich websites with engaging multimedia content that captivates and converts visitors.",
          },
          {
            title: "Cutting-Edge Technology",
            content:
              "We incorporate the latest technologies like machine learning and VR to give your website a competitive edge.",
          },
          {
            title: "Typography Excellence",
            content:
              "Our thoughtful use of typography improves readability and enhances the overall user experience.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
        ],
      },
      detailPageServiceFaq: {
        content: "Common FAQs for Website Design",
        FaqPoints: [
          {
            question: "How long does it take to design a website?",
            answer:
              "The timeline varies depending on the complexity and features of the website. A standard site typically takes 4 to 12 weeks from concept to launch, factoring in design, development, and revisions.",
          },
          {
            question: "What technologies do you use to build websites?",
            answer:
              "We specialize in building websites using HTML, CSS, and React for the frontend. For dynamic websites requiring content management, we develop custom admin panels in PHP.",
          },
          {
            question: "Will my website be mobile-friendly?",
            answer:
              "Absolutely! All our websites are fully responsive, ensuring they look and perform great on desktops, tablets, and mobile devices.",
          },
          {
            question: "Can I manage the website content myself?",
            answer:
              "Yes, for dynamic websites, we provide an admin panel built with PHP, allowing you to easily update and manage content without technical expertise.",
          },
          {
            question: "How much does it cost to build a website?",
            answer:
              "The cost depends on the complexity, features, and specific requirements of your project. We offer customized quotes after an initial consultation to understand your needs.",
          },
          {
            question:
              "Do you provide ongoing support after the website is launched?",
            answer:
              "Yes, we offer maintenance and support packages to keep your website secure, updated, and running smoothly. This includes updates, backups, and technical support.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Ready to get started?",
        heading2: "Get in touch now!",
        content:
          "Let's get started on your custom website design. We're here to help you create a website that perfectly suits your business needs.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "custom-website-development",
      title:
        "Custom Website Development - Nipralo Technologies | Tailored Web Solutions",
      description:
        "Discover our custom website development services at Nipralo Technologies. We specialize in creating custom, high-performance websites tailored to your business needs.",
      keywords:
        "custom website development, bespoke web development, tailored web solutions, web development services",
      ogImage: "https://www.nipralo.com/path/to/your-image.jpg",
      ogUrl: "https://www.nipralo.com/service/custom-website-development",
    },
  },
  {
    id: 2,
    serviceName: "Website Development",
    detail:
      "Building robust, custom websites with advanced functionality and seamless performance.",
    btnInitialText: "Website Development",
    btnFlippedText: "Let's go!",
    btnWidth: "225",
    detailPage: {
      detailPageBanner: {
        heading: "Custom website development: Crafting Your Brand Online",
        content:
          "Explore the world of custom web development with Nipralo Technologies as your trusted partner. We don’t just create websites; we craft digital experiences that align with your brand's philosophy. Whether you're a startup or an established corporation, our tailored solutions include everything from real-time updates to AI chatbots and e-commerce integration. Built with core languages like HTML, CSS, React, PHP, and Laravel, our websites are secure, scalable, and SEO-optimized to drive your business forward.",
      },
      detailPageServicePoints: {
        // heading1: "Our Website Development Services",
        heading2: "Our Website Development Services",
        content:
          "Our custom website development services are thoughtfully designed to align with your unique business goals. Whether creating new digital experiences or refining existing ones, we bring excellence to every project. Explore our specialities:",
        servicePoints: [
          {
            heading: "New Development",
            content:
              "Starting from scratch, we craft websites that reflect your brand’s identity and objectives. Every site is a seamless blend of aesthetics and functionality, captivating your audience with every interaction.",
          },
          {
            heading: "Website Redesign",
            content:
              "If your current site needs a fresh look, our redesign services are here. We analyze your existing design, identify areas for improvement, and create a modern, immersive interface that boosts user engagement and strengthens your brand image.",
          },
          {
            heading: "Seamless Migration",
            content:
              "Moving from another platform? Our careful migration process ensures a smooth transition, preserving your content, design integrity, and SEO performance. Enjoy the benefits of a modern website without the hassle.",
          },
          {
            heading: "Content Management Systems",
            content:
              "Take control with our custom CMS solutions. Easily manage, update, and organize your content, keeping your site dynamic and aligned with the latest trends.",
          },
          {
            heading: "SEO Services",
            content:
              "Elevate your search rankings with our comprehensive SEO strategies. Through detailed keyword research, on-page optimization, and industry-best practices, we help increase your online visibility and attract more organic traffic.",
          },
          {
            heading: "Continuous Support",
            content:
              "Our commitment to your success doesn’t end at launch. We provide ongoing support, regular updates, and enhancements, ensuring your website remains a leading force in your industry.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Our Achievements: A Closer Look",
        content:
          "Venture into our gallery of custom digital creations, a testament to the expertise and trust that Nipralo Technologies has earned from diverse businesses. From innovative startups charting new territories to established entities amplifying their online presence, our showcase is a reflection of our commitment to precision, craftsmanship, and excellence in every project.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Website Development?",
        content:
          "At Nipralo Technologies, we value collaboration, efficiency, and lasting partnerships. Our agile approach guarantees timely project delivery, while our transparent processes build trust. Our dedication to your success is unwavering. Discover the Nipralo Technologies difference:",
        processPoints: [
          {
            title: "Tailored digital solutions",
            content:
              "Your brand is unique, and your website should reflect that. Our custom solutions ensure your online presence is a true embodiment of your brand, designed to captivate and convert.",
          },
          {
            title: "Uncompromised quality",
            content:
              "Our focus on quality ensures every project meets the highest standards of design, functionality, and performance. Rigorous testing and quality checks guarantee a flawless user experience aligned with your business goals.",
          },
          {
            title: "Agile development",
            content:
              "Our flexible methodology allows us to deliver your project quickly without sacrificing quality. Launch your website in weeks, not months. We adapt swiftly to feedback, keeping your project on track and true to your vision.",
          },
          {
            title: "Ongoing support",
            content:
              "We’re here for continuous support and updates, ensuring your digital presence remains strong. From regular maintenance to feature enhancements, we’re a long-term partner you can depend on.",
          },
          {
            title: "SEO optimisation",
            content:
              "Our SEO-friendly development helps your business rank higher in search results, boosting visibility and reach. Through in-depth keyword research, on-page optimisation, and strategic link building, we drive more organic traffic to your site.",
          },
          {
            title: "Client-centric approach",
            content:
              "We prioritize partnership and collaboration. Our transparent process involves you every step of the way, from consultation to delivery. Your input shapes the final product, ensuring it resonates with your brand and audience.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our custom website development service include",
        FaqPoints: [
          {
            question:
              "Why is Website Development Needed and Why Choose Nipralo Technologies?",
            answer:
              "In today's digital age, a professional website is crucial for establishing a strong online presence, engaging with your audience, and driving business growth. At Nipralo Technologies, we provide custom website development solutions that not only meet your unique needs but also enhance your brand's online identity. Our team combines expertise in the latest technologies with a deep understanding of your business goals to deliver websites that stand out. Choosing us means you get tailored solutions, exceptional quality, and ongoing support that ensures your website remains effective and relevant.",
          },
          {
            question: "What Is Taken Care of in Website Development?",
            answer:
              "Website development involves several key aspects:Planning: Understanding your goals, target audience, and technical requirements.Design: Creating a visually appealing and user-friendly layout that aligns with your brand. Development: Building the site using the latest technologies and coding practices to ensure functionality and performance. Content Creation: Developing engaging and relevant content that resonates with your audience. Testing: Rigorous testing to identify and fix any issues before launch. SEO Optimization: Implementing strategies to improve your site’s visibility on search engines. Maintenance: Providing ongoing support and updates to keep your site running smoothly.",
          },
          {
            question: "Static vs. Dynamic Websites: What Should You Choose?",
            answer:
              "Static Websites: These are ideal for businesses that need a simple, cost-effective solution with fixed content. They are easier to develop and maintain but offer limited functionality. Dynamic Websites: Best for businesses that require interactive features and regularly updated content. They offer more flexibility and functionality, allowing for personalized user experiences and easier content management. Choosing between static and dynamic depends on your needs. If you need frequent updates and interactive elements, a dynamic site is the way to go. For a straightforward, informational site, a static website might be sufficient.",
          },

          {
            question: "New Trends in Website Design",
            answer:
              "AI Integration: Using artificial intelligence for personalized user experiences and chatbots. Voice Search Optimization: Adapting websites to be compatible with voice search technology. Mobile-First Design: Prioritizing mobile usability to meet the growing number of mobile users. Minimalist Design: Focusing on clean, simple layouts with intuitive navigation. Interactive Elements: Incorporating engaging features like animations and interactive content.",
          },

          {
            question: "Website Portfolio",
            answer:
              "Explore our diverse portfolio to see examples of our work:Industries: Filter by industry to view projects specific to your sector. Dynamic Websites: Browse examples of sites with interactive features and dynamic content. Static Websites: View simple, effective websites designed for straightforward content delivery.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Ready to get started?",
        heading2: "Let's build your future together.",
        content:
          "Your business deserves a website that not only stands out but also drives results. Our team of experts is here to turn your vision into reality.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "custom-website-development",
      title:
        "Custom Website Development - Nipralo Technologies | Tailored Web Solutions",
      description:
        "Discover our custom website development services at Nipralo Technologies. We specialize in creating custom, high-performance websites tailored to your business needs.",
      keywords:
        "custom website development, bespoke web development, tailored web solutions, web development services",
      ogImage:
        "https://www.nipralo.com/assets/images/custom-website-development.jpg",
      ogUrl: "https://www.nipralo.com/service/custom-website-development",
    },
    // Add other services similarly
  },
  {
    id: 3,
    serviceName: "Ecommerce platform development",
    detail:
      "Creating effective online stores and platforms to drive sales and manage transactions.",
    btnInitialText: "Ecommerce platform",
    btnFlippedText: "Let's go!",
    btnWidth: "220",
    detailPage: {
      detailPageBanner: {
        heading:
          "Ecommerce Platform/App:  Revolutionize Your Business with Mobile Commerce",
        content:
          "In the era of mobile-first experiences, an ecommerce app is crucial for businesses looking to engage customers on the go. Nipralo Technologies develops ecommerce platforms that put your store directly in your customers’ hands.",
      },
      detailPageServicePoints: {
        // heading1: "Our Custom Website ",
        heading2: " Building Powerful Mobile Commerce Solutions",
        content:
          "We specialize in creating robust ecommerce platforms and apps that are designed to deliver seamless shopping experiences, no matter where your customers are.",
        servicePoints: [
          {
            heading: "Cross-Platform Development",
            content:
              "Apps built with React Native for flawless performance on both iOS and Android.",
          },
          {
            heading: "User-Centric Design",
            content:
              "Intuitive interfaces that provide an engaging shopping experience for users.",
          },
          {
            heading: "Push Notifications",
            content:
              "Keep your customers informed about deals, offers, and new products directly on their devices.",
          },
          {
            heading: "Real-Time Analytics",
            content:
              "Get instant insights into customer behavior, sales, and app performance.",
          },
          {
            heading: "Secure Payment Integration",
            content: "Ensuring safe and easy transactions within the app.",
          },
          {
            heading: "Scalable Architecture",
            content:
              "Grow your app as your business expands, with no limitations.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Empowering Businesses through Mobile Commerce",
        content:
          "We've developed ecommerce platforms and apps for a wide range of industries, helping businesses reach their customers wherever they are.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for E-commerce Platform?",
        content:
          "At Nipralo Technologies, we don’t just build e-commerce platforms—we create future-ready solutions tailored to your unique business needs. Here's why you should choose us",
        processPoints: [
          {
            title: "Unmatched Technical Expertise",
            content:
              "Our team of highly skilled developers brings deep technical knowledge, ensuring your platform is built with the latest technologies and best practices.",
          },
          {
            title: "Customized Solutions",
            content:
              "We believe in providing only what you need. By offering bespoke solutions and modules, we ensure you're only charged for what adds value to your business.",
          },
          {
            title: "Empowering Decision-Making",
            content:
              "We guide you through every step, equipping you with the knowledge to make informed decisions, so you’re in control of your e-commerce journey.",
          },
          {
            title: "Superior Customer Service",
            content:
              "Trust and prompt support are at the core of our service. We’re committed to building long-term relationships through responsive, reliable, and friendly customer care.",
          },
          {
            title: "Scalable Growth",
            content:
              "Nipralo Technologies builds e-commerce platforms that easily scale with your business, supporting your growth without the need for constant upgrades.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Hear from Our Satisfied Clients",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            // img: "/images/client1.png",
            // name: "ABC Corp",
            // company: "XYZ Inc",
            text: "Thanks to Nipralo Technologies, our ecommerce app has become a major driver of sales and customer engagement.",
          },
          // {
          //   // img: "/images/client1.png",
          //   // name: "ABC Corp",
          //   // company: "XYZ Inc",
          //   text: "Thanks to Nipralo Technologies, our ecommerce app has become a major driver of sales and customer engagement.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our Ecommerce platform development services include",
        FaqPoints: [
          {
            question: "How long does it take to develop an ecommerce app?",
            answer:
              "Depending on the features and complexity, it typically takes around 8 to 16 weeks.",
          },
          {
            question: "Will my app work on both iOS and Android?",
            answer:
              "Yes, we develop cross-platform apps that function smoothly on both operating systems.",
          },
          {
            question: "How do I update my app content?",
            answer:
              "Our apps come with an easy-to-use admin panel that allows you to update content in real time.",
          },
          {
            question: "What security measures are in place for transactions?",
            answer:
              "We integrate industry-standard security protocols to protect user data and ensure secure transactions.",
          },
          {
            question: "How do push notifications benefit my business?",
            answer:
              "Push notifications keep your customers engaged by informing them about new offers, products, and updates instantly.",
          },
          {
            question:
              "Why should I invest in an ecommerce app when I already have a physical store?",
            answer:
              "An ecommerce app offers unparalleled convenience, allowing customers to shop anytime, anywhere, which significantly expands your reach beyond the local area. It also provides personalized shopping experiences through data-driven insights and push notifications. While a brick-and-mortar store allows for direct customer interactions and tangible experiences, an ecommerce app complements it by catering to the growing demand for digital shopping, thus enabling a seamless blend of both worlds.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Ready to get started?",
        heading2: "Let's get started",
        content:
          "Let's get started with your Ecommerce Development. We're here to help you create a Platform that perfectly suits your business needs.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "e-commerce-platform-development",
      title:
        "E-Commerce Platform Development - Nipralo Technologies | Custom E-Commerce Solutions",
      description:
        "Explore our e-commerce platform development services at Nipralo Technologies. We create robust, scalable e-commerce solutions tailored to enhance your online business.",
      keywords:
        "e-commerce platform development, custom e-commerce solutions, online store development, scalable e-commerce platforms",
      ogImage:
        "https://www.nipralo.com/assets/images/e-commerce-platform-development.jpg",
      ogUrl: "https://www.nipralo.com/service/e-commerce-platform-development",
    },
  },
  {
    id: 4,
    serviceName: "Mobile App development",
    detail:
      " Designing and developing custom mobile apps for both Android and iOS platforms.",
    btnInitialText: "Mobile App Development",
    btnFlippedText: "Let's go!",
    btnWidth: "240",
    detailPage: {
      detailPageBanner: {
        heading: "Mobile App Development: Innovate, Engage, Deliver",
        content:
          "At Nipralo Technologies, we specialize in creating mobile apps that combine innovation with functionality. Our apps are designed to engage users and deliver seamless experiences, ensuring your brand remains accessible and relevant in a mobile-first world.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: " End-to-End App Solutions ",
        content:
          "Our suite of Webflow services is meticulously crafted to cater to your distinct business aspirations. Whether it's birthing new digital marvels or refining existing gems, our commitment to excellence shines through every project. Delve into our Webflow specialities:",
        servicePoints: [
          {
            heading: "Custom App Development",
            content:
              "Build unique mobile apps tailored to your specific business needs, ensuring a perfect fit for your brand and audience.",
          },
          {
            heading: "Cross-Platform Solutions",
            content:
              "Develop apps that work seamlessly across iOS and Android, maximizing your reach and impact.",
          },
          {
            heading: "User Experience Design",
            content:
              "Create intuitive and engaging user interfaces that enhance user satisfaction and drive app adoption.",
          },
          {
            heading: "App Store Optimization (ASO)",
            content:
              "Optimize your app’s presence in the App Store and Google Play to increase visibility and downloads.",
          },
          {
            heading: "Performance & Security Testing",
            content:
              "Ensure your app performs flawlessly with rigorous testing and robust security measures.",
          },
          {
            heading: "Ongoing Support & Maintenance",
            content:
              "Provide continuous updates, bug fixes, and new features to keep your app current and competitive.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects: Mobile Innovation at Its Best",
        content:
          "Our mobile app development services have empowered businesses to innovate and engage with their customers on a whole new level. Explore our portfolio to see how we’ve helped clients bring their app ideas to life.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Mobile App Development?",
        content:
          "Some of the most frequently asked questions about our custom website design services include",
        processPoints: [
          {
            title: "Custom Solutions",
            content:
              "Tailored app development ensures your app meets your unique business goals and customer needs.",
          },
          {
            title:
              "Cross-Platform Reach",
            content:
              "Maximize your audience by developing apps that function seamlessly on both iOS and Android platforms.",
          },
          {
            title: "User-Centric Design",
            content:
              "Focus on creating user-friendly designs that enhance engagement and retention.",
          },
          {
            title: "Optimized for Visibility",
            content:
              "Increase app downloads with strategic App Store Optimization (ASO) techniques.",
          },
          {
            title:
              "Secure & Reliable",
            content:
              "Protect user data and ensure smooth performance with top-tier security and testing protocols.",
          },
          {
            title: "Long-Term Success",
            content:
              "Benefit from ongoing support and updates that keep your app relevant and high-performing.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials: Apps That Make an Impact",
        content:
          "Our clients have successfully gained customer engagement via App",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies developed an app for us that has transformed our customer engagement, offering a seamless and intuitive user experience.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our mobile app development services include",
        FaqPoints: [
          {
            question: "How long does it take to develop a mobile app?",
            answer:
              "The timeline depends on the complexity of the app, but most projects take between 3 to 6 months from concept to launch.",
          },
          {
            question:
              "What platforms do you develop apps for?",
            answer:
              "We develop apps for both iOS and Android, offering cross-platform solutions to maximize reach.",
          },
          {
            question: "How do you ensure the app’s performance?",
            answer:
              "We conduct rigorous performance and security testing to ensure the app runs smoothly and securely across all devices.",
          },
          {
            question: "Can you help with app store optimization (ASO)?",
            answer:
              "Yes, we offer ASO services to enhance your app’s visibility in the App Store and Google Play, driving more downloads.",
          },
          {
            question:
              "What kind of post-launch support do you offer?",
            answer:
              "We provide ongoing support, including updates, bug fixes, and feature enhancements to keep your app competitive.",
          },
          {
            question: "Why choose Nipralo Technologies for mobile app development?",
            answer:
              "We deliver custom, user-centric apps that drive engagement and deliver measurable results, backed by our expertise and commitment to your success",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Ready to get started?",
        // heading2: "Let's get started",
        content:
          "Let's get started on your App development journey. We're here to help you create a app that perfectly suits your business needs.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "mobile-app-development",
      title:
        "Mobile App Development - Nipralo Technologies | Innovative Mobile Solutions",
      description:
        "Discover our mobile app development services at Nipralo Technologies. We deliver cutting-edge mobile solutions that enhance user experience and drive business growth.",
      keywords:
        "mobile app development, app development services, innovative mobile solutions, iOS and Android development",
      ogImage:
        "https://www.nipralo.com/assets/images/mobile-app-development.jpg",
      ogUrl: "https://www.nipralo.com/service/mobile-app-development",
    },
  },
  {
    id: 5,
    serviceName: "Custom ERP Solutions",
    detail:
      " Creating custom ERP systems to streamline and integrate your business processes.",
    btnInitialText: "Custom ERP Solutions",
    btnFlippedText: "Let's go!",
    btnWidth: "230",
    detailPage: {
      detailPageBanner: {
        heading: "ERP Software Solutions: Streamline, Integrate, Empower",
        content:
          "At Nipralo Technologies, we specialize in developing ERP software that unifies your business processes into a single, efficient system. Our ERP solutions are designed to streamline operations, improve productivity, and provide real-time insights, enabling your business to thrive.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Comprehensive ERP Solutions",
        content:
          "Our team excels in creating customized ERP software tailored to your unique business needs. From inventory management to financial planning, our ERP systems are built to enhance efficiency across all departments.",
        servicePoints: [
          {
            heading: "Custom ERP Development",
            content:
              "Design and implement ERP software that aligns perfectly with your specific business processes and goals.",
          },
          {
            heading: "Integration Services",
            content:
              "Seamlessly integrate your existing software and tools into a unified ERP system for smoother operations.",
          },
          {
            heading: "Process Automation",
            content:
              "Automate repetitive tasks and workflows to increase efficiency and reduce manual errors.",
          },
          {
            heading: "Data Management & Reporting",
            content:
              "Centralize your data and generate detailed reports to gain valuable insights and make informed decisions.",
          },
          {
            heading: "User Training & Support",
            content:
              "Provide comprehensive training and ongoing support to ensure your team can fully utilize the ERP system.",
          },
          {
            heading: "Scalability & Flexibility",
            content:
              "Develop ERP solutions that grow with your business, easily adapting to new challenges and opportunities.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our ERP software solutions have transformed the way businesses operate, leading to increased efficiency, better decision-making, and improved profitability. Explore our case studies to see the impact of our ERP expertise.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for ERP Software?",
        content:
          "Our ERP solutions are designed to integrate seamlessly into your business, providing a single source of truth for all your operations, and driving long-term success.",
        processPoints: [
          {
            title: "Streamlined Operations",
            content:
              "Unify all your business processes into one system for better coordination and efficiency.",
          },
          {
            title:
              "Improved Productivity",
            content:
              "Automate tasks and workflows to free up time for more strategic activities.",
          },
          {
            title: "Real-Time Insights",
            content:
              "Access up-to-date information and analytics to make informed decisions quickly.",
          },
          {
            title:
              "Enhanced Data Management",
            content:
              "Centralize data storage and management, ensuring consistency and accuracy across the organization.",
          },
          {
            title: "Scalable Solutions",
            content:
              "Our ERP systems are built to grow with your business, adapting to new needs as they arise.",
          },
          {
            title: "Dedicated Support",
            content:
              "Receive ongoing support and maintenance to ensure your ERP system continues to meet your business needs.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ ERP software has revolutionized the way we manage our operations, making our processes more efficient and our decisions more informed.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our ERP Software include",
        FaqPoints: [
          {
            question: "What is ERP software, and how can it benefit my business?",
            answer:
              "ERP software integrates all your business processes into one system, improving efficiency, productivity, and decision-making.",
          },
          {
            question:
              "How long does it take to implement an ERP system?",
            answer:
              "The timeline varies depending on the complexity of your needs, but most ERP implementations take 3 to 6 months.",
          },
          {
            question: "Can the ERP system be customized for my business?",
            answer:
              "Yes, our ERP solutions are fully customizable to meet the specific needs and goals of your business.",
          },
          {
            question: "How does ERP improve decision-making?",
            answer:
              "ERP provides real-time data and analytics, giving you the insights needed to make informed, strategic decisions.",
          },
          {
            question:
              "What kind of support do you offer after implementation?",
            answer:
              "We provide ongoing support, including user training, troubleshooting, and system maintenance to ensure your ERP continues to perform optimally.",
          },
          {
            question: "Why choose Nipralo Technologies for ERP solutions?",
            answer:
              "We offer tailored ERP solutions that are designed to streamline your operations, improve productivity, and support your business growth, with dedicated support throughout the process.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Elevate Your Business with ",
        heading2: "Custom ERP Solutions",
        content:
          "Is your ERP system falling short? Our tailored ERP solutions offer seamless integration, automation, and data management. Let us handle the details so you can focus on growing your business. Ready to upgrade?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "custom-erp-solutions",
      title:
        "Custom ERP Solutions - Nipralo Technologies | Tailored ERP Systems",
      description:
        "Explore our custom ERP solutions at Nipralo Technologies. We provide bespoke ERP systems designed to streamline your business processes and enhance efficiency.",
      keywords:
        "custom ERP solutions, ERP system development, tailored ERP systems, enterprise resource planning",
      ogImage: "https://www.nipralo.com/assets/images/custom-erp-solutions.jpg",
      ogUrl: "https://www.nipralo.com/service/custom-erp-solutions",
    },
  },
  {
    id: 6,
    serviceName: "SEO",
    detail:
      "Boosting your website's visibility and rankings with targeted optimization strategies to drive organic traffic.",
    btnInitialText: "SEO",
    btnFlippedText: "Let's go!",
    btnWidth: "180",
    detailPage: {
      detailPageBanner: {
        heading: "SEO Services: Boost Your Visibility",
        content:
          "At Nipralo Technologies, we specialize in SEO strategies that drive real results. Our approach is tailored to your industry, business goals, and audience, ensuring you achieve top rankings and increased traffic.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Comprehensive SEO Solutions",
        content:
          "Our team provides end-to-end SEO services, from on-page optimization to advanced technical SEO, ensuring your website is fully optimized for search engines.",
        servicePoints: [
          {
            heading: "SEO Audits",
            content:
              "Thorough audits to identify and fix issues that may be hindering your rankings.",
          },
          {
            heading: "Keyword Research",
            content:
              "In-depth analysis to target high-value keywords for your business.",
          },
          {
            heading: "Content Creation",
            content:
              "Crafting SEO-optimized content that resonates with your audience and drives conversions.",
          },
          {
            heading: "On-Page Optimization",
            content:
              "Enhancing your website's content, meta tags, and URLs for better visibility.",
          },
          {
            heading: "Link Building",
            content:
              "Developing high-quality backlinks to improve your site’s authority.",
          },
          {
            heading: "Technical SEO",
            content:
              "Optimizing site speed, mobile-friendliness, and security to enhance user experience and rankings.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our portfolio showcases a variety of successful SEO campaigns that have significantly improved our clients’ search engine rankings and online visibility.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for SEO?",
        content:
          "We focus on delivering SEO strategies that are tailored to your specific business needs, ensuring sustainable growth and long-term success.",
        processPoints: [
          {
            title: "Increased Traffic",
            content:
              "Attract more visitors with targeted SEO efforts.",
          },
          {
            title:
              "Higher Rankings",
            content:
              "Achieve top positions on search engine results pages.",
          },
          {
            title: "Improved User Experience",
            content:
              "Optimized sites lead to better engagement and lower bounce rates.",
          },
          {
            title: "Better Conversion Rates",
            content:
              "Convert visitors into customers with SEO-driven strategies.",
          },
          {
            title:
              "Cost-Effective Marketing",
            content:
              "SEO provides long-term results with a high return on investment.",
          },
          {
            title: "Ongoing Support",
            content:
              "Continuous monitoring and optimization to maintain and improve your rankings.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our SEO service include",
        FaqPoints: [
          {
            question: "How long does it take to see results from SEO?",
            answer:
              "SEO is a long-term strategy, with noticeable improvements typically appearing within 3 to 6 months.",
          },
          {
            question:
              "What makes Nipralo's SEO services different?",
            answer:
              "We provide personalized, data-driven strategies that align with your business goals and industry.",
          },
          // {
          //   question: "Do you offer a free custom website design?",
          //   answer:
          //     "Yes, we offer a free custom website design for small businesses. This includes a basic design, logo design, and color scheme.",
          // },
        ],
      },
      detailPageCTA: {
        heading1: "Maximize Your Online Visibility",
        heading2: "Let's get started",
        content:
          "Looking to improve your search engine rankings? Our professional SEO services are designed to enhance your visibility, attract qualified traffic, and drive business growth. Let us optimize your website for long-term success. Ready to achieve higher rankings?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "digital-marketing",
      title:
        "Digital Marketing - Nipralo Technologies | Comprehensive Digital Strategies",
      description:
        "Unlock the full potential of your online presence with our digital marketing services at Nipralo Technologies. We offer tailored strategies in SEO, PPC, social media, and content marketing to drive growth and engagement.",
      keywords:
        "digital marketing, SEO services, PPC advertising, social media marketing, content marketing, online marketing strategies",
      ogImage: "https://www.nipralo.com/assets/images/digital-marketing.jpg",
      ogUrl: "https://www.nipralo.com/service/digital-marketing",
    },
  },
  {
    id: 7,
    serviceName: "Lead Generation",
    detail:
      "Generating quality leads through data-driven campaigns to increase conversions and sales.",
    btnInitialText: "Lead Generation",
    btnFlippedText: "Let's go!",
    btnWidth: "200",
    detailPage: {
      detailPageBanner: {
        heading: "Lead Generation: Targeted Growth Strategies",
        content:
          "Nipralo Technologies offers comprehensive lead generation services through Google, Facebook, Instagram, and LinkedIn. Our data-driven approach ensures you reach the right audience and convert leads into customers.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Maximizing ROI",
        content:
          "Our team leverages advanced targeting and creative strategies to generate high-quality leads across various platforms.",
        servicePoints: [
          {
            heading: "Google Ads",
            content:
              "Creating and managing campaigns that drive traffic and conversions.",
          },
          {
            heading: "Facebook Ads",
            content:
              "Targeting specific demographics to generate leads through engaging ads.",
          },
          {
            heading: "Instagram Ads",
            content:
              "Utilizing visually appealing content to attract and convert potential customers.",
          },
          {
            heading: "LinkedIn Ads",
            content:
              "Reaching professionals with tailored B2B campaigns.",
          },
          {
            heading: "A/B Testing",
            content:
              "Continuously optimizing campaigns to improve performance and ROI.",
          },
          {
            heading: "Analytics & Reporting",
            content:
              " Providing detailed insights into campaign effectiveness and areas for improvement.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        // content:
        //   "Our portfolio showcases a variety of successful SEO campaigns that have significantly improved our clients’ search engine rankings and online visibility.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Lead Generation?",
        content:
          "Our lead generation strategies are designed to attract, engage, and convert your target audience effectively, ensuring sustained business growth.",
        processPoints: [
          {
            title: "Targeted Advertising",
            content:
              "Reach the right audience with precision targeting.",
          },
          {
            title:
              "Increased Conversions",
            content:
              "Maximize reach with campaigns across multiple platforms.",
          },
          {
            title: "Multi-Channel Approach",
            content:
              "Optimized sites lead to better engagement and lower bounce rates.",
          },
          {
            title: "Cost Efficiency",
            content:
              "Get the most out of your ad spend with our strategic approach.",
          },
          {
            title:
              "Real-Time Analytics",
            content:
              "Monitor campaign performance and adjust strategies on the go.",
          },
          {
            title: "Ongoing Optimization",
            content:
              "Continuously refine campaigns for better results.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "The lead generation campaigns by Nipralo Technologies have consistently delivered high-quality leads that have significantly boosted our sales",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our Lead Generation service include",
        FaqPoints: [
          {
            question: "How do you ensure the quality of leads?",
            answer:
              "We use advanced targeting techniques and continuous optimization to attract high-intent leads.",
          },
          {
            question:
              "Which platform is best for lead generation?",
            answer:
              "The best platform depends on your industry and target audience. We tailor our strategies accordingly.",
          },
          // {
          //   question: "Do you offer a free custom website design?",
          //   answer:
          //     "Yes, we offer a free custom website design for small businesses. This includes a basic design, logo design, and color scheme.",
          // },
        ],
      },
      detailPageCTA: {
        heading1: "Accelerate Your Lead",
        heading2: "Generation",
        content:
          "Need a steady stream of qualified leads? Our targeted lead generation services are designed to attract and convert prospects, driving sustainable growth for your business. Let us help you build a robust pipeline of opportunities. Ready to boost your sales?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "digital-marketing",
      title:
        "Digital Marketing - Nipralo Technologies | Comprehensive Digital Strategies",
      description:
        "Unlock the full potential of your online presence with our digital marketing services at Nipralo Technologies. We offer tailored strategies in SEO, PPC, social media, and content marketing to drive growth and engagement.",
      keywords:
        "digital marketing, SEO services, PPC advertising, social media marketing, content marketing, online marketing strategies",
      ogImage: "https://www.nipralo.com/assets/images/digital-marketing.jpg",
      ogUrl: "https://www.nipralo.com/service/digital-marketing",
    },
  },
  {
    id: 8,
    serviceName: "Social Media Management & marketing",
    detail:
      "Managing your brand’s social presence, creating engaging content, and growing your audience through strategic campaigns.",
    btnInitialText: "SMM",
    btnFlippedText: "Let's go!",
    btnWidth: "160",
    detailPage: {
      detailPageBanner: {
        heading: "Social Media Management & Marketing: Building Your Brand Online",
        content:
          "At Nipralo Technologies, we specialize in social media management and marketing, helping businesses build their brand and connect with their audience. From creative design to strategy execution, we’ve got you covered.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Engaging Content, Strong Presence",
        content:
          "Our social media services are designed to create impactful campaigns that resonate with your audience, driving engagement and brand loyalty.",
        servicePoints: [
          {
            heading: "Content Creation",
            content:
              "Developing high-quality visuals, videos, and posts that align with your brand.",
          },
          {
            heading: "Social Media Strategy",
            content:
              "Crafting tailored strategies to meet your business goals.",
          },
          {
            heading: "Creative Design",
            content:
              "Designing eye-catching graphics and reels to boost brand visibility.",
          },
          {
            heading: "Paid Social Campaigns",
            content:
              " Running targeted ads on social platforms to increase reach and conversions.",
          },
          {
            heading: "Analytics & Reporting",
            content:
              "Providing insights into social media performance and areas for improvement.",
          },
          {
            heading: "Community Management",
            content:
              "Engaging with your audience to build a loyal following.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our portfolio showcases a variety of successful SEO campaigns that have significantly improved our clients’ search engine rankings and online visibility.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Social Media?",
        content:
          "Our comprehensive approach to social media ensures that your brand remains relevant, engaging, and influential across all platforms.",
        processPoints: [
          {
            title: "Enhanced Brand Visibility",
            content:
              " Increase your brand’s online presence with targeted social media campaigns.",
          },
          {
            title:
              "Creative Content",
            content:
              "Stand out with visually appealing and engaging content.",
          },
          {
            title: "Audience Engagement",
            content:
              "Build strong relationships with your audience through consistent interaction.",
          },
          {
            title: "Brand Loyalty",
            content:
              "Foster long-term customer loyalty with strategic community management.",
          },
          {
            title:
              "Performance Tracking",
            content:
              "Monitor and optimize your social media efforts with detailed analytics.",
          },
          {
            title: "Expert Support",
            content:
              "Our team of social media experts is here to guide you every step of the way.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our SEO service include",
        FaqPoints: [
          {
            question: "How often should I post on social media?",
            answer:
              "Posting frequency depends on your audience and platform. We recommend a consistent schedule tailored to your goals.",
          },
          {
            question:
              "Can you help with paid social media campaigns?",
            answer:
              "Yes, we create and manage paid social campaigns to maximize your reach and ROI.",
          },
          // {
          //   question: "Do you offer a free custom website design?",
          //   answer:
          //     "Yes, we offer a free custom website design for small businesses. This includes a basic design, logo design, and color scheme.",
          // },
        ],
      },
      detailPageCTA: {
        heading1: "Amplify Your Social ",
        heading2: "Media Presence",
        content:
          "Struggling with online engagement? Our social media management services connect you with your audience and build brand loyalty. Let us handle your social channels while you grow your business. Ready to make an impact?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "digital-marketing",
      title:
        "Digital Marketing - Nipralo Technologies | Comprehensive Digital Strategies",
      description:
        "Unlock the full potential of your online presence with our digital marketing services at Nipralo Technologies. We offer tailored strategies in SEO, PPC, social media, and content marketing to drive growth and engagement.",
      keywords:
        "digital marketing, SEO services, PPC advertising, social media marketing, content marketing, online marketing strategies",
      ogImage: "https://www.nipralo.com/assets/images/digital-marketing.jpg",
      ogUrl: "https://www.nipralo.com/service/digital-marketing",
    },
  },
  {
    id: 9,
    serviceName: "Website Audit",
    detail:
      "Evaluating and optimizing your website’s performance, security, and usability.",
    btnInitialText: "Website Audit",
    btnFlippedText: "Let's go!",
    btnWidth: "200",
    detailPage: {
      detailPageBanner: {
        heading: "Website Audit: Optimize Your Online Presence",
        content:
          "At Nipralo Technologies, we specialize in comprehensive website audits that reveal hidden issues and uncover opportunities for improvement. Our detailed audits help you enhance performance, security, and user experience, ensuring your website is fully optimized.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Thorough Audits for Maximum Impact",
        content:
          "We provide in-depth website audits that analyze every aspect of your site, from technical performance to content quality, ensuring your website is functioning at its best.",
        servicePoints: [
          {
            heading: "Technical SEO Audit",
            content:
              "Identify and resolve technical issues that could be hindering your site’s search engine performance.",
          },
          {
            heading: "Performance Analysis",
            content:
              "Evaluate your website’s loading speed, mobile responsiveness, and overall performance to ensure a smooth user experience.",
          },
          {
            heading: "Security Audit",
            content:
              "Detect vulnerabilities and implement solutions to safeguard your website from potential threats.",
          },
          {
            heading: "Content Quality Review",
            content:
              "Assess the relevance and effectiveness of your website’s content, ensuring it aligns with SEO best practices and user intent.",
          },
          {
            heading: "UX/UI Evaluation",
            content:
              "Analyze your site’s design and user interface to identify areas for improving user engagement and satisfaction.",
          },
          {
            heading: "Compliance Check",
            content:
              "Ensure your website adheres to industry standards and regulations, such as GDPR and ADA compliance.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects: Audit Success Stories",
        content:
          "Explore how our website audits have helped businesses optimize their online presence. Our audits have led to improved performance, better user experiences, and higher search engine rankings.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Website Audits?",
        content:
          "Our website audits are designed to provide actionable insights that lead to tangible improvements. We don’t just identify problems; we offer solutions that drive results.",
        processPoints: [
          {
            title: "Improved Performance",
            content:
              "Enhance site speed, usability, and overall performance for a better user experience.",
          },
          {
            title:
              "Increased Security",
            content:
              "Protect your website from potential threats with a thorough security audit.",
          },
          {
            title: "Better SEO Rankings",
            content:
              "Resolve technical issues that may be affecting your search engine rankings.",
          },
          {
            title: "Optimized Content",
            content:
              "Ensure your content is engaging, relevant, and aligned with SEO best practices.",
          },
          {
            title:
              "Enhanced User Experience",
            content:
              "Improve user satisfaction by identifying and fixing UI/UX issues.",
          },
          {
            title: "Regulatory Compliance",
            content:
              "Keep your website compliant with industry regulations and avoid potential legal issues.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials Turning Insights into Results",
        // content:
        //   "Nipralo Technologies’ website audit helped us uncover critical issues and provided clear steps to improve our site’s performance and security.",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ website audit helped us uncover critical issues and provided clear steps to improve our site’s performance and security.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
          {
            img: "/images/client2.png",
            name: "Dimple Mehra",
            company: "XYZ Inc",
            text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about website audit service include",
        FaqPoints: [
          {
            question: "What is included in a website audit?",
            answer:
              "Our website audits cover technical SEO, performance, security, content quality, UX/UI, and compliance checks.",
          },
          {
            question:
              "How long does a website audit take?",
            answer:
              "The duration of a website audit depends on the size and complexity of the site, but typically takes 1 to 2 weeks.",
          },
          {
            question: "Can you help implement the changes after the audit?",
            answer:
              "Yes, we provide detailed recommendations and can assist with implementing the necessary changes to improve your website.",
          },
          {
            question: "Why is a website audit important?",
            answer:
              "A website audit helps identify hidden issues that may be affecting your site’s performance, security, and search engine rankings.",
          },
          {
            question:
              "How often should I conduct a website audit?",
            answer:
              "We recommend conducting a website audit at least once a year, or whenever you make significant changes to your site.",
          },
          {
            question: "What makes Nipralo’s website audits different?",
            answer:
              "Our audits are thorough and tailored to your specific needs, providing clear, actionable insights that lead to measurable improvements.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Unleash Your Website's",
        heading2: "Potential",
        content:
          "Enhance your website’s performance with our Website Audit. We’ll assess key areas like SEO and user experience to identify improvement opportunities. Optimize your site to retain more customers and drive success.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },

    servicesMeta: {
      id: "website-audit",
      title:
        "Website Audit - Nipralo Technologies | Comprehensive Website Analysis",
      description:
        "Improve your website’s performance with our comprehensive website audit services at Nipralo Technologies. We analyze your site’s SEO, usability, speed, and security to enhance its overall effectiveness.",
      keywords:
        "website audit, SEO audit, website analysis, performance audit, site usability, website security",
      ogImage: "https://www.nipralo.com/assets/images/website-audit.jpg",
      ogUrl: "https://www.nipralo.com/service/website-audit",
    },
  },
  {
    id: 10,
    serviceName: "Testing",
    detail:
      "Ensuring the reliability and quality of your digital products through thorough testing processes.",
    btnInitialText: "Testing",
    btnFlippedText: "Let's go!",
    btnWidth: "180",
    detailPage: {
      detailPageBanner: {
        heading: "Testing: Ensuring Quality and Performance",
        content:
          "At Nipralo Technologies, we understand the critical importance of delivering flawless digital experiences. Our comprehensive testing services for websites, apps, and software ensure that your products are bug-free, secure, and optimized for performance before they reach your users.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Our Expertise: Thorough Testing for Reliable Results",
        content:
          "Our expert team employs a variety of testing methods to identify and resolve issues, ensuring that your website, app, or software operates smoothly and efficiently across all platforms.",
        servicePoints: [
          {
            heading: "Functional Testing",
            content:
              "Validate that all features work as intended, ensuring a seamless user experience.",
          },
          {
            heading: "Performance Testing",
            content:
              "Assess how your website, app, or software performs under various conditions, including high traffic loads.",
          },
          {
            heading: "Security Testing",
            content:
              "Identify vulnerabilities and protect your digital assets from potential security threats.",
          },
          {
            heading: "Compatibility Testing",
            content:
              "Ensure compatibility across different devices, browsers, and operating systems, guaranteeing a consistent experience for all users.",
          },
          {
            heading: "Usability Testing",
            content:
              "Evaluate the user interface and experience to ensure your product is intuitive and user-friendly.",
          },
          {
            heading: "Automation Testing",
            content:
              "Implement automated testing solutions to streamline the testing process and quickly identify issues.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects: Testing Success Stories",
        content:
          "Our testing services have ensured the successful launch of numerous websites, apps, and software products. Explore our case studies to see how we’ve helped businesses deliver reliable, high-performing digital solutions.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Testing Services?",
        content:
          "We combine advanced testing techniques with industry best practices to deliver comprehensive testing solutions that ensure your product’s success.",
        processPoints: [
          {
            title: "Enhanced Quality",
            content:
              "Ensure your digital products are free of bugs and deliver a smooth user experience.",
          },
          {
            title:
              "Improved Performance",
            content:
              "Identify and resolve performance bottlenecks to deliver faster, more reliable experiences.",
          },
          {
            title: "Increased Security",
            content:
              "Protect your website, app, or software from potential threats with thorough security testing.",
          },
          {
            title: "Cross-Platform Consistency",
            content:
              "Guarantee a consistent experience across all devices, browsers, and operating systems.",
          },
          {
            title:
              "Faster Time to Market",
            content:
              "Streamline the testing process with automated solutions that help you launch faster.",
          },
          {
            title: "Ongoing Support",
            content:
              "Our team provides continuous testing support to ensure your products remain high-performing and secure.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials: Delivering Reliability and Excellence",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ thorough testing services helped us launch a flawless app that our users love.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about Testing services include",
        FaqPoints: [
          {
            question: "What types of testing do you offer?",
            answer:
              "We offer a full range of testing services, including functional, performance, security, compatibility, usability, and automation testing.",
          },
          {
            question:
              "How long does the testing process take?",
            answer:
              "The duration depends on the complexity of the project, but we work efficiently to ensure timely delivery without compromising quality.",
          },
          {
            question: "Can you test across multiple platforms?",
            answer:
              "Yes, our compatibility testing ensures your product performs consistently across all devices, browsers, and operating systems.",
          },
          {
            question: "Why is testing important before launching?",
            answer:
              "Testing helps identify and resolve issues before they affect your users, ensuring a smooth and successful launch.",
          },
          {
            question: "Do you offer ongoing testing support?",
            answer:
              "Yes, we provide continuous testing support to ensure your digital products remain high-performing and secure.",
          },
          {
            question: "What makes Nipralo’s testing services different?",
            answer:
              "We use a combination of manual and automated testing methods, tailored to your specific needs, to deliver reliable and thorough testing results.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Ready to enhance your software quality?",
        heading2: "Let's test your software",
        content:
          "Ensure your product is bug-free and user-friendly with our comprehensive testing services. We identify potential issues before they reach your customers, giving you the confidence to launch with success.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "testing",
      title:
        "Software Testing - Nipralo Technologies | Quality Assurance Services",
      description:
        "Ensure your software’s reliability and performance with our comprehensive testing services at Nipralo Technologies. We offer functional testing, performance testing, and security testing to deliver high-quality software solutions.",
      keywords:
        "software testing, quality assurance, functional testing, performance testing, security testing, testing services",
      ogImage: "https://www.nipralo.com/assets/images/software-testing.jpg",
      ogUrl: "https://www.nipralo.com/service/testing",
    },
  },
  {
    id: 11,
    serviceName: "UI-UX",
    detail:
      "Enhancing user experience through intuitive interfaces and engaging design.",
    btnInitialText: "UI/UX",
    btnFlippedText: "Let's go!",
    btnWidth: "180",
    detailPage: {
      detailPageBanner: {
        heading: "UI/UX Design Services: Designing User-Centric Experiences",
        content:
          "At Nipralo Technologies, we craft UI/UX designs that not only look stunning but also provide intuitive and seamless user experiences. Our design philosophy centers around understanding user behavior and translating it into a digital experience that resonates with your audience.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Innovative UI/UX Solutions",
        content:
          "We specialize in creating user interfaces and experiences that are both visually appealing and highly functional. Our team works closely with you to ensure that every aspect of your digital product aligns with your brand and meets the needs of your users.",
        servicePoints: [
          {
            heading: "User Research & Analysis",
            content:
              "Gain insights into your target audience through comprehensive user research, informing design decisions that resonate with users.",
          },
          {
            heading: "Wireframing & Prototyping",
            content:
              "Visualize the structure of your digital product with detailed wireframes and interactive prototypes that bring your ideas to life.",
          },
          {
            heading: "Responsive Design",
            content:
              "Ensure your digital product looks and works flawlessly across all devices, from desktops to smartphones.",
          },
          {
            heading: "Interaction Design",
            content:
              "Create engaging and intuitive interactions that enhance user satisfaction and increase engagement.",
          },
          {
            heading: "Visual Design",
            content:
              "Develop a cohesive visual identity with design elements that reflect your brand and appeal to your target audience.",
          },
          {
            heading: "Usability Testing",
            content:
              "Validate your design with real users, ensuring the final product is intuitive, accessible, and easy to use.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Recent Custom Website Designs",
        content:
          "Some of our clients have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for UI/UX Design?",
        content:
          "We focus on delivering user-centered designs that not only captivate but also enhance usability, ensuring your digital product stands out in a crowded market.",
        processPoints: [
          {
            title: "User-Centric Design",
            content:
              "Create designs that resonate with your audience, improving user engagement and satisfaction.",
          },
          {
            title:
              "Enhanced Usability",
            content:
              "Ensure your digital product is easy to use, reducing friction and increasing user retention.",
          },
          {
            title: "Cross-Device Compatibility",
            content:
              "Develop responsive designs that provide a consistent experience across all devices.",
          },
          {
            title: "Increased Engagement",
            content:
              "Create intuitive interactions that keep users engaged and coming back for more.",
          },
          {
            title:
              "Brand Alignment",
            content:
              "Ensure your design reflects your brand’s identity, creating a cohesive and memorable experience.",
          },
          {
            title: "Data-Driven Decisions",
            content:
              "Utilize user research and testing to inform design decisions, ensuring your product meets the needs of your audience.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        // content:
        //   "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies delivered a UI/UX design that perfectly captured our brand and provided an exceptional user experience.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our UI/UX design service include",
        FaqPoints: [
          {
            question: "What is UI/UX design, and why is it important?",
            answer:
              "UI/UX design focuses on creating digital products that are both visually appealing and easy to use, enhancing the overall user experience.",
          },
          {
            question:
              "How long does the UI/UX design process take?",
            answer:
              "The timeline varies depending on the complexity of the project, but most designs take between 4 to 8 weeks from concept to final delivery.",
          },
          {
            question: "Do you conduct user testing?",
            answer:
              "Yes, we conduct usability testing to validate our designs with real users, ensuring the final product meets their needs.",
          },
          {
            question: "Can you redesign an existing product?",
            answer:
              "Absolutely, we offer redesign services to improve the usability and visual appeal of existing digital products.",
          },
          {
            question: "How do you ensure the design aligns with our brand?",
            answer:
              "We work closely with you to understand your brand’s identity and incorporate it into every aspect of the design.",
          },
          {
            question: "Why choose Nipralo Technologies for UI/UX design?",
            answer:
              "We deliver user-centered designs that not only captivate but also enhance usability, ensuring your digital product stands out in a crowded market.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Enhance Your User ",
        heading2: "Experience",
        content:
          "Is your digital interface engaging enough? Our UI/UX design services create intuitive, visually appealing experiences that keep users coming back. Let’s design a user journey that delights and converts. Ready to elevate your user experience?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },

    servicesMeta: {
      id: "ui-ux",
      title:
        "UI/UX Design - Nipralo Technologies | Exceptional User Experience",
      description:
        "Enhance user satisfaction with our UI/UX design services at Nipralo Technologies. We create intuitive and engaging user interfaces and experiences to ensure your digital products stand out and meet user needs effectively.",
      keywords:
        "UI/UX design, user interface design, user experience design, UX research, UI design services, user-centered design",
      ogImage: "https://www.nipralo.com/assets/images/ui-ux.jpg",
      ogUrl: "https://www.nipralo.com/service/ui-ux",
    },
  },
  {
    id: 12,
    serviceName: "Cloud Solution",
    detail:
      "Providing scalable cloud services to enhance data storage, management, and accessibility.",
    btnInitialText: "Cloud Solution",
    btnFlippedText: "Let's go!",
    btnWidth: "200",
    detailPage: {
      detailPageBanner: {
        heading: "Cloud Solution: Scalable, Secure, and Efficient",
        content:
          "At Nipralo Technologies, we provide cloud solutions that enable businesses to scale effortlessly while ensuring security and efficiency. Our cloud services are designed to meet the diverse needs of modern enterprises, helping you stay competitive in a rapidly evolving digital landscape.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: " Our Expertise: Comprehensive Cloud Services ",
        content:
          "Our cloud solutions are tailored to help your business leverage the full power of the cloud, from infrastructure management to data storage and beyond.",
        servicePoints: [
          {
            heading: "Cloud Migration",
            content:
              "Seamlessly transition your existing infrastructure to the cloud with minimal downtime and disruption.",
          },
          {
            heading: "Infrastructure as a Service (IaaS)",
            content:
              "Flexible and scalable cloud infrastructure that grows with your business needs.",
          },
          {
            heading: "Cloud Security",
            content:
              "Protect your data and applications with robust security protocols and continuous monitoring.",
          },
          {
            heading: "Disaster Recovery",
            content:
              "Ensure business continuity with cloud-based disaster recovery solutions that provide fast recovery times.",
          },
          {
            heading: "Cloud Storage Solutions",
            content:
              "Scalable and secure cloud storage options to store and manage your data effectively.",
          },
          {
            heading: "Managed Cloud Services",
            content:
              "End-to-end management of your cloud infrastructure, allowing you to focus on your core business.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects: Cloud Success Stories",
        content:
          "Our cloud solutions have empowered businesses to optimize their operations, reduce costs, and enhance security. Explore our success stories to see how we've helped clients harness the full potential of the cloud.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Cloud Solutions?",
        content:
          "We offer cloud solutions that are customized to your specific business needs, ensuring scalability, security, and efficiency at every stage.",
        processPoints: [
          {
            title: "Scalability",
            content:
              "Easily scale your infrastructure up or down based on your business demands.",
          },
          {
            title:
              "Enhanced Security",
            content:
              "Protect your data with industry-leading security measures and real-time monitoring.",
          },
          {
            title: "Cost Efficiency",
            content:
              "Reduce IT costs with flexible, pay-as-you-go cloud solutions.",
          },
          {
            title:
              "Improved Performance",
            content:
              "Boost your application performance with cloud infrastructure designed for speed and reliability.",
          },
          {
            title: "Business Continuity",
            content:
              "Minimize downtime and ensure seamless operations with robust disaster recovery solutions.",
          },
          {
            title: "Expert Management",
            content:
              "Our team of cloud experts handles everything from setup to ongoing management, allowing you to focus on growing your business.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials: Scalability and Security Delivered",
        // content:
        //   "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ cloud solutions have transformed our IT infrastructure, providing us with the flexibility and security we need to grow.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our cloud solution services include",
        FaqPoints: [
          {
            question: "What are the benefits of cloud migration?",
            answer:
              "Cloud migration offers scalability, cost savings, improved performance, and enhanced security.",
          },
          {
            question:
              "How secure are your cloud solutions?",
            answer:
              "Our cloud solutions include robust security measures such as encryption, firewalls, and continuous monitoring to protect your data.",
          },
          {
            question: "Can you manage our entire cloud infrastructure?",
            answer:
              "Yes, we offer fully managed cloud services, handling everything from deployment to ongoing maintenance and support.",
          },
          {
            question: "What cloud platforms do you support?",
            answer:
              "We work with leading cloud providers like AWS, Microsoft Azure, and Google Cloud to deliver customized solutions.",
          },
          {
            question:
              "How does cloud disaster recovery work?",
            answer:
              "Our cloud disaster recovery solutions ensure your data and applications are backed up and can be restored quickly in case of an outage",
          },
          {
            question: "Why choose Nipralo Technologies for cloud solutions?",
            answer:
              "We provide tailored, scalable, and secure cloud solutions, backed by our team of experts who are committed to your success.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Transform your business with cloud solutions",
        heading2: "Let's innovate with the cloud",
        content:
          "Unlock the power of cloud technology to drive efficiency, scalability, and growth. Our cloud solutions are designed to adapt to your business needs, ensuring seamless operations and enhanced performance. Elevate your business to new heights.",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "cloud-solution",
      title:
        "Cloud Solutions - Nipralo Technologies | Scalable and Secure Cloud Services",
      description:
        "Optimize your IT infrastructure with our cloud solutions at Nipralo Technologies. We offer scalable, secure, and cost-effective cloud services to enhance your business operations and drive growth.",
      keywords:
        "cloud solutions, cloud services, scalable cloud infrastructure, secure cloud solutions, cloud computing, cloud management",
      ogImage: "https://www.nipralo.com/assets/images/cloud-solution.jpg",
      ogUrl: "https://www.nipralo.com/service/cloud-solution",
    },
  },
  {
    id: 13,
    serviceName: "Website Management",
    detail:
      "Overseeing and maintaining your website’s functionality, updates, and security.",
    btnInitialText: "Website Management",
    btnFlippedText: "Let's go!",
    btnWidth: "230",
    detailPage: {
      detailPageBanner: {
        heading: "Website Management: Optimize, Secure, Evolve",
        content:
          "At Nipralo Technologies, we offer comprehensive website management services that ensure your site remains secure, up-to-date, and performing at its best. Our proactive approach to website management allows you to focus on your core business while we take care of everything behind the scenes.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "End-to-End Website Care",
        content:
          "Our team specializes in all aspects of website management, from routine updates to advanced security measures, ensuring your site is always operating at peak efficiency.",
        servicePoints: [
          {
            heading: "Regular Updates & Maintenance",
            content:
              "Keep your website current with regular content updates, software upgrades, and performance enhancements.",
          },
          {
            heading: "Security Monitoring & Protection",
            content:
              "Safeguard your site against threats with continuous security monitoring, vulnerability assessments, and timely patches.",
          },
          {
            heading: "Performance Optimization",
            content:
              "Enhance your website’s speed and reliability with ongoing performance tuning and optimization.",
          },
          {
            heading: "Backup & Disaster Recovery",
            content:
              "Ensure your data is safe with automated backups and a robust disaster recovery plan to quickly restore your site if needed.",
          },
          {
            heading: "Content Management",
            content:
              "Easily manage your website’s content with our support, ensuring your site stays fresh, relevant, and aligned with your business goals.",
          },
          {
            heading: "Analytics & Reporting",
            content:
              "Gain valuable insights into your website’s performance with detailed analytics and reports that guide strategic decisions.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our website management services have helped numerous businesses maintain top-performing sites that engage users and drive results. Explore our case studies to see the impact of our expertise.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Website Management?",
        content:
          "Our comprehensive website management services are designed to give you peace of mind, knowing that your website is in expert hands and always functioning at its best.",
        processPoints: [
          {
            title: "Enhanced Security",
            content:
              "Continuous monitoring and timely updates keep your website protected against potential threats.",
          },
          {
            title:
              "Optimal Performance",
            content:
              "Regular performance optimization ensures your site loads quickly and operates smoothly for all users.",
          },
          {
            title: "Reliable Backups",
            content:
              "Automated backups provide peace of mind, knowing your data is safe and can be restored at any time.",
          },
          {
            title: "Up-to-Date Content",
            content:
              "Keep your website relevant and engaging with regular content updates and management support.",
          },
          {
            title:
              "Informed Decisions",
            content:
              "Detailed analytics help you understand your site’s performance and make data-driven decisions.",
          },
          {
            title: "Stress-Free Management",
            content:
              "Focus on your business while we handle the technical details, ensuring your website remains a powerful asset.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies has managed our website flawlessly, ensuring it’s always secure, up-to-date, and performing at its best.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our website management service include",
        FaqPoints: [
          {
            question: "What does website management include?",
            answer:
              "Our website management services cover regular updates, security monitoring, performance optimization, backups, content management, and analytics.",
          },
          {
            question:
              "How often should my website be updated?",
            answer:
              "We recommend regular updates to keep your site secure, fast, and aligned with your business goals. The frequency depends on your specific needs.",
          },
          {
            question: "Can you handle website security for us?",
            answer:
              "Yes, we offer comprehensive security monitoring and protection as part of our website management services.",
          },
          {
            question: "What happens if my website goes down?",
            answer:
              "Our disaster recovery plans ensure that your website is quickly restored, minimizing downtime and disruption.",
          },
          {
            question: "How do you ensure my website remains fast and reliable?",
            answer:
              "We perform ongoing performance optimization to ensure your site loads quickly and operates smoothly at all times.",
          },
          {
            question: "Why should I choose Nipralo for website management?",
            answer:
              "We provide a holistic approach to website management, offering everything from updates and security to performance optimization and analytics, ensuring your website is always an asset to your business.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Revolutionize Your ",
        heading2: "Website Management",
        content:
          "Is your site performing at its best? Our expert management services keep your website optimized, secure, and engaging. Let us handle the details so you can focus on what matters. Ready for a smoother, more effective website?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "website-management",
      title:
        "Website Management - Nipralo Technologies | Comprehensive Website Support",
      description:
        "Ensure your website runs smoothly with our website management services at Nipralo Technologies. We provide ongoing support, maintenance, and updates to keep your website secure and efficient.",
      keywords:
        "website management, website support, website maintenance, website updates, website security, site management services",
      ogImage: "https://www.nipralo.com/assets/images/website-management.jpg",
      ogUrl: "https://www.nipralo.com/service/website-management",
    },
  },
  {
    id: 14,
    serviceName: "Local SEO",
    detail:
      "Optimizing your online presence to attract local customers and improve search engine rankings.",
    btnInitialText: "Local SEO",
    btnFlippedText: "Let's go!",
    btnWidth: "180",
    detailPage: {
      detailPageBanner: {
        heading: "Local SEO Services: Boost Your Local Presence",
        content:
          "At Nipralo Technologies, we specialize in Local SEO services that help your business stand out in local search results. Our strategies are designed to drive traffic from nearby customers, increasing visibility and footfall to your business.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Targeted Local SEO Strategies",
        content:
          "We provide comprehensive Local SEO solutions that enhance your visibility in local search results, ensuring your business is easily found by potential customers in your area.",
        servicePoints: [
          {
            heading: "Google My Business Optimization",
            content:
              "Optimize your Google My Business profile to appear in local searches and on Google Maps, attracting more local customers.",
          },
          {
            heading: "Local Keyword Research",
            content:
              "Identify and target the most relevant local keywords that your potential customers are searching for.",
          },
          {
            heading: "On-Page SEO",
            content:
              "Optimize your website’s content and meta tags to improve local search rankings and user engagement.",
          },
          {
            heading: "Citation Building",
            content:
              "Ensure your business is listed accurately in online directories and local listings to boost your local SEO efforts.",
          },
          {
            heading: "Local Link Building",
            content:
              "Develop a strong backlink profile with local businesses and websites to improve your domain authority and local rankings.",
          },
          {
            heading: "Reputation Management",
            content:
              "Manage and respond to customer reviews to build a positive online reputation and encourage more local engagement.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our Local SEO services have helped numerous businesses increase their visibility in local searches, resulting in more foot traffic, leads, and sales. Explore our case studies to see the impact of our strategies.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Local SEO?",
        content:
          "Our Local SEO strategies are tailored to your specific business needs, ensuring you dominate local search results and attract more customers from your area.",
        processPoints: [
          {
            title: "Increased Local Visibility",
            content:
              "Ensure your business appears at the top of local search results, driving more traffic from nearby customers.",
          },
          {
            title:
              "Higher Search Rankings",
            content:
              "Improve your rankings in local searches with targeted keyword optimization and on-page SEO.",
          },
          {
            title: "Enhanced Online Reputation",
            content:
              "Build a strong, positive reputation online through effective review management and customer engagement.",
          },
          {
            title: "Accurate Local Listings",
            content:
              "Ensure consistent and accurate business information across all local directories and listings.",
          },
          {
            title:
              "More Foot Traffic",
            content:
              "Drive more customers to your physical location with optimized local search strategies.",
          },
          {
            title: "Targeted Marketing",
            content:
              "Reach customers in your immediate area who are actively searching for the products or services you offer.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        content:
          "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ Local SEO services have significantly increased our visibility in local searches, bringing more customers to our door.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about Local SEO service include",
        FaqPoints: [
          {
            question: "What is Local SEO, and why is it important?",
            answer:
              "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. It’s crucial for businesses that serve customers in specific geographic areas.",
          },
          {
            question:
              "How long does it take to see results from Local SEO?",
            answer:
              "Results can vary, but most businesses start seeing improvements in local search rankings within 3 to 6 months.",
          },
          {
            question: "What are Google My Business optimizations?",
            answer:
              "This involves enhancing your Google My Business profile to improve visibility in local search results and Google Maps.",
          },
          {
            question: "How do you manage online reviews?",
            answer:
              "We help monitor, respond to, and manage online reviews to build a positive reputation and encourage more local engagement.",
          },
          {
            question:
              "Why is local citation building important?",
            answer:
              "Accurate and consistent citations in local directories improve your local search rankings and help customers find your business.",
          },
          {
            question: "Why choose Nipralo Technologies for Local SEO?",
            answer:
              "We offer tailored Local SEO strategies designed to boost your visibility, attract more local customers, and grow your business.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Boost Your SEO Today",
        content:
          "Want to stand out in local searches? Our expert local SEO services help you rank higher, attract more customers, and grow your business in your community. Let’s enhance your online presence and drive local traffic to your doorstep. Ready to get noticed?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "local-seo",
      title:
        "Local SEO - Nipralo Technologies | Enhance Your Local Online Presence",
      description:
        "Boost your local search visibility with our local SEO services at Nipralo Technologies. We help businesses improve their rankings in local search results, attract more local customers, and drive traffic to your physical location.",
      keywords:
        "local SEO, local search optimization, local search engine marketing, local business SEO, local ranking, local online presence",
      ogImage: "https://www.nipralo.com/assets/images/local-seo.jpg",
      ogUrl: "https://www.nipralo.com/service/local-seo",
    },
  },
  {
    id: 15,
    serviceName: "Brand Strategy",
    detail:
      "Developing comprehensive strategies to build and strengthen your brand’s identity.",
    btnInitialText: "Brand Strategy",
    btnFlippedText: "Let's go!",
    btnWidth: "200",
    detailPage: {
      detailPageBanner: {
        heading: "Brand Strategy: Define, Develop, Dominate",
        content:
          "At Nipralo Technologies, we craft brand strategies that resonate with your audience and drive business growth. Our approach is rooted in understanding your brand’s core values and translating them into a compelling narrative that stands out in a crowded market.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Strategic Branding for Impact",
        content:
          "Our suite of Webflow services is meticulously crafted to cater to your distinct business aspirations. Whether it's birthing new digital marvels or refining existing gems, our commitment to excellence shines through every project. Delve into our Webflow specialities:",
        servicePoints: [
          {
            heading: "Brand Identity Development",
            content:
              "Establish a distinct and cohesive brand identity that reflects your values and mission.",
          },
          {
            heading: "Market Research & Analysis",
            content:
              "OGain deep insights into your target market, competitors, and industry trends to inform your brand strategy.",
          },
          {
            heading: "Positioning Strategy",
            content:
              "Define your unique value proposition and position your brand effectively in the marketplace.",
          },
          {
            heading: "Messaging & Storytelling",
            content:
              "Craft compelling brand messages and stories that connect with your audience on an emotional level.",
          },
          {
            heading: "Visual Branding",
            content:
              "Develop a consistent visual language, including logos, color schemes, and typography, that reinforces your brand identity.",
          },
          {
            heading: "Brand Experience Design",
            content:
              "Ensure every touchpoint with your brand delivers a consistent and impactful experience, from online presence to customer service.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our brand strategy services have helped numerous businesses establish strong, recognizable brands that drive growth. Explore our portfolio to see how we’ve turned vision into reality for our clients.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for Brand Strategy?",
        content:
          "Our approach to brand strategy is comprehensive and tailored, ensuring your brand not only stands out but also connects deeply with your target audience.",
        processPoints: [
          {
            title: "Clear Brand Identity",
            content:
              "Develop a distinct identity that sets you apart from competitors and resonates with your audience.",
          },
          {
            title:
              "Market Insight",
            content:
              "Leverage in-depth market research to inform your strategy and stay ahead of trends.",
          },
          {
            title: "Effective Positioning",
            content:
              "Position your brand to highlight your unique strengths and value in the market.",
          },
          {
            title: "Compelling Messaging",
            content:
              "Create brand messages that are authentic, engaging, and aligned with your audience’s needs.",
          },
          {
            title: "Consistent Visuals",
            content:
              "Ensure a unified and professional visual representation across all platforms and materials.",
          },
          {
            title: "Memorable Brand Experience",
            content:
              "Design a cohesive brand experience that leaves a lasting impression on your customers.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        // content:
        //   "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies helped us refine our brand strategy, giving us a clear direction and a strong market presence.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our custom website design services include",
        FaqPoints: [
          {
            question: "What is included in a brand strategy?",
            answer:
              "Our brand strategy includes identity development, market research, positioning, messaging, visual branding, and experience design.",
          },
          {
            question:
              "How long does it take to develop a brand strategy?",
            answer:
              "The timeline varies depending on the complexity, but typically takes 4 to 8 weeks from initial consultation to final delivery.",
          },
          {
            question: "Can you help rebrand an existing business?",
            answer:
              "Yes, we offer rebranding services to help businesses redefine their brand identity and strategy.",
          },
          {
            question: "How do you ensure the brand strategy aligns with my business goals?",
            answer:
              "We work closely with you to understand your goals, values, and target audience, ensuring the strategy aligns perfectly with your objectives.",
          },
          {
            question: "Why is a brand strategy important?",
            answer:
              "A strong brand strategy helps you connect with your audience, differentiate from competitors, and build long-term customer loyalty.",
          },
          {
            question: "What makes Nipralo’s brand strategy services different?",
            answer:
              "Our approach is personalized, data-driven, and focused on creating a brand that not only stands out but also drives growth.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Elevate Your Brand with ",
        heading2: "Expert Strategy?",
        content:
          "Want to make a lasting impression? Our branding strategy services craft a powerful brand identity that resonates with your audience and drives growth. Transform your brand and stand out from the competition. Ready to redefine your image?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "brand-strategy",
      title:
        "Brand Strategy - Nipralo Technologies | Build a Strong Brand Identity",
      description:
        "Develop a powerful brand identity with our brand strategy services at Nipralo Technologies. We offer comprehensive strategies to create, manage, and enhance your brand’s presence and reputation in the market.",
      keywords:
        "brand strategy, brand identity, brand development, branding services, brand management, brand positioning",
      ogImage: "https://www.nipralo.com/assets/images/brand-strategy.jpg",
      ogUrl: "https://www.nipralo.com/service/brand-strategy",
    },
  },
  {
    id: 16,
    serviceName: "AI Automation",
    detail:
      "Leveraging artificial intelligence to automate processes and enhance operational efficiency.",
    btnInitialText: "AI Automation",
    btnFlippedText: "Let's go!",
    btnWidth: "200",
    detailPage: {
      detailPageBanner: {
        heading: "AI Automation Services: Innovate, Automate, Excel",
        content:
          "At Nipralo Technologies, we harness the power of AI to automate complex processes, driving efficiency and innovation in your business operations. Our AI automation services are designed to streamline workflows, reduce manual effort, and unlock new opportunities for growth.",
      },
      detailPageServicePoints: {
        heading1: "Our Custom Website ",
        heading2: "Intelligent Process Automation",
        content:
          "Our suite of Webflow services is meticulously crafted to cater to your distinct business aspirations. Whether it's birthing new digital marvels or refining existing gems, our commitment to excellence shines through every project. Delve into our Webflow specialities:",
        servicePoints: [
          {
            heading: "Intelligent Process Automation",
            content:
              "Automate repetitive tasks with AI-powered solutions, freeing up time for strategic initiatives.",
          },
          {
            heading: "Predictive Analytics",
            content:
              "Leverage AI to analyze data and predict future trends, enabling smarter decision-making.",
          },
          {
            heading: "Robotic Process Automation (RPA)",
            content:
              "Deploy bots to automate routine tasks, increasing efficiency and reducing human error.",
          },
          {
            heading: "Natural Language Processing (NLP)",
            content:
              "Implement AI-driven language processing to enhance customer interactions and improve communication.",
          },
          {
            heading: "Machine Learning Integration",
            content:
              "Integrate machine learning models into your systems to automate complex decision-making processes.",
          },
          {
            heading: "AI-Powered Chatbots",
            content:
              "Enhance customer service with AI chatbots that provide instant, accurate responses to customer queries.",
          },
        ],
      },
      detailPageServicePortfolio: {
        heading: "Nipralo Technologies Completed Projects",
        content:
          "Our AI automation services have helped businesses across industries streamline operations and achieve new levels of efficiency. Explore our portfolio to see how we’ve implemented AI to drive success for our clients.",
        portfolioDetail: [
          {
            id: 1,
            title: "Inspired Business Media",
            tech: ["Web Design", "Webflow Development"],
            img: img1,
            link: "https://bigdreams.in",
            titledelay: 0.2,
          },
          {
            id: 2,
            title: "Karve International",
            tech: ["Web Design", "Webflow Development"],
            img: img2,
            link: "https://bigdreams.in",
            titledelay: 0.4,
          },
          {
            id: 3,
            title: "Sedna",
            tech: ["Webflow Development"],
            img: img3,
            link: "https://bigdreams.in",
            titledelay: 0.6,
          },
        ],
      },
      detailPageServiceProcess: {
        heading: "Why Nipralo Technologies for AI Automation?",
        content:
          "Our AI automation services are designed to deliver measurable results, helping you stay ahead of the competition by automating key business processes and unlocking new opportunities for growth.",
        processPoints: [
          {
            title: "Increased Efficiency",
            content:
              "Automate repetitive tasks, freeing up resources for more strategic work.",
          },
          {
            title:
              "Data-Driven Decisions",
            content:
              "Use predictive analytics to make informed decisions based on real-time data insights.",
          },
          {
            title: "Enhanced Customer Experience",
            content:
              "Improve customer interactions with AI-driven communication tools like chatbots.",
          },
          {
            title: "Cost Reduction",
            content:
              "Reduce operational costs by automating manual processes and minimizing errors.",
          },
          {
            title:
              "Scalability",
            content:
              "Implement AI solutions that scale with your business, adapting to new challenges and opportunities.",
          },
          {
            title: "Competitive Advantage",
            content:
              "Stay ahead of the competition by leveraging AI to innovate and improve your business operations.",
          },
        ],
      },
      detailPageServiceTestimonial: {
        heading: "Client Testimonials",
        // content:
        //   "Some of our satisfied customers have successfully implemented custom website designs for their businesses. Check out some of our satisfied customers below:",
        testimonials: [
          {
            img: "/images/client1.png",
            name: "ABC Corp",
            company: "XYZ Inc",
            text: "Nipralo Technologies’ AI automation services have revolutionized our business operations, leading to significant improvements in efficiency and customer satisfaction.",
          },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
          // {
          //   img: "/images/client2.png",
          //   name: "Dimple Mehra",
          //   company: "XYZ Inc",
          //   text: "We used Quarter Digital to design our website and logo. They gave us a professional modern site for a very reasonable price. The site has been instrumental in helping us launch our company. Overall, it was great working with Quarter Digital.",
          // },
        ],
      },
      detailPageServiceFaq: {
        content:
          "Some of the most frequently asked questions about our custom website design services include",
        FaqPoints: [
          {
            question: "What is AI automation, and how can it benefit my business?",
            answer:
              "AI automation involves using artificial intelligence to automate business processes, improving efficiency, accuracy, and decision-making.",
          },
          {
            question:
              "How long does it take to implement an AI automation solution?",
            answer:
              "The timeline depends on the complexity of the project, but most implementations take 3 to 6 months.",
          },
          {
            question: "Can AI automation be customized for my business?",
            answer:
              "Yes, our AI solutions are fully customizable to meet the specific needs and goals of your business.",
          },
          {
            question:
              "How does AI automation improve customer service?",
            answer:
              "AI-driven tools like chatbots can provide instant, accurate responses to customer inquiries, improving overall customer satisfaction.",
          },
          {
            question: "Why choose Nipralo Technologies for AI automation?",
            answer:
              "We offer tailored AI automation solutions that drive efficiency, reduce costs, and provide a competitive edge, backed by our expertise and commitment to your success.",
          },
        ],
      },
      detailPageCTA: {
        heading1: "Revolutionize with AI Automation",
        // heading2: "Let's get started",
        content:
          "Looking to streamline your processes? Our AI automation services enhance efficiency, reduce errors, and drive innovation. Transform your operations with cutting-edge technology and stay ahead of the competition. Ready to embrace the future?",
        initialBtnText: "Contact Us",
        flippedBtnText: "Contact Us",
      },
    },
    servicesMeta: {
      id: "ai-automation",
      title:
        "AI Automation - Nipralo Technologies | Intelligent Automation Solutions",
      description:
        "Leverage the power of artificial intelligence with our AI automation services at Nipralo Technologies. We provide innovative solutions to automate processes, enhance efficiency, and drive digital transformation.",
      keywords:
        "AI automation, artificial intelligence, automation solutions, AI-driven automation, process automation, intelligent automation",
      ogImage: "https://www.nipralo.com/assets/images/ai-automation.jpg",
      ogUrl: "https://www.nipralo.com/service/ai-automation",
    },
  },
];

export default servicesData;
