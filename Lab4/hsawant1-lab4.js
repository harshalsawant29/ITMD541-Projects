(function() {
    // Changing hero title
    const headerTitle = document.querySelector('#hero h1');
    headerTitle.textContent = "Supercharge Your Brand with Stellar Marketing";
    // Changing hero subtitle
    const headerSubtitle = document.querySelector('#hero p');
    headerSubtitle.innerHTML = "<b><i>Leverage innovative strategies from Stellar Marketing to make your business shine and succeed.</i></b>";
    // Backgriund image
    const heroSection = document.querySelector('#hero');
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";

    // Set the header background color 
    const headerElement = document.querySelector('header');
    const footerBackgroundColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
    headerElement.style.backgroundColor = footerBackgroundColor;

    // Remove already present CTA buttons
    const existingButtons = document.querySelectorAll('#hero a, #hero button'); 
    existingButtons.forEach(btn => btn.remove());

    // Create a new CTA section
    const newCtaSection = document.createElement('section');
    newCtaSection.style.backgroundColor = '#6495ed';
    newCtaSection.style.padding = '16px 0';
    newCtaSection.style.width = '100%';
    newCtaSection.style.textAlign = 'center';
    newCtaSection.style.margin = '0 0 32px 0';

    // Ensure the hero section has no bottom margin
    heroSection.style.marginBottom = '0';

    // Create the consultation scheduling button
    const consultationBtn = document.createElement('button');
    consultationBtn.textContent = 'Schedule a Consultation Today';
    consultationBtn.style.padding = '8px 20px';
    consultationBtn.style.backgroundColor = '#ffffff';
    consultationBtn.style.color = '#2261ec';
    consultationBtn.style.fontSize = '14px';
    consultationBtn.style.fontWeight = '500';
    consultationBtn.style.border = '3px solid #2261ec'; 
    consultationBtn.style.borderRadius = '4px';
    consultationBtn.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
    consultationBtn.style.cursor = 'pointer';
    consultationBtn.style.transition = 'all 0.3s ease';
    consultationBtn.style.letterSpacing = '0.5px';
    consultationBtn.style.textTransform = 'none';
    consultationBtn.style.margin = '16px 0';

    // Add hover effects to the button
    consultationBtn.onmouseover = function() {
        consultationBtn.style.backgroundColor = '#2261ec';
        consultationBtn.style.color = '#ffffff';
    };
    consultationBtn.onmouseout = function() {
        consultationBtn.style.backgroundColor = '#ffffff';
        consultationBtn.style.color = '#2261ec';
    };

    // Add alert on CTA button click
    consultationBtn.onclick = function() {
        alert("Thank You for your interest in Stellar Marketing!");
    };

    newCtaSection.appendChild(consultationBtn);
    heroSection.after(newCtaSection);

    const serviceIcons = document.querySelectorAll('[data-icon]');
    serviceIcons.forEach(icon => {
        icon.style.color = '#6495ed';
    });

    // Change the Digital Marketing icon
    const digitalMarketingElement = document.querySelector('[data-icon="digital"]');
    if (digitalMarketingElement) {
        digitalMarketingElement.innerHTML = '<span class="material-symbols-outlined" style="font-size: 48px;">ads_click</span>';
    }

    // Change the layout for the Specialized Marketing Solutions section
    const productCardSection = document.querySelector('[data-section="product_cards"]');
    if (productCardSection && window.innerWidth >= 1024) {
        productCardSection.style.display = 'grid';
        productCardSection.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }

    // Change the Musicians image
    const musiciansImgElement = document.querySelector('[alt="Musicians"]');
    if (musiciansImgElement) {
        musiciansImgElement.src = 'https://picsum.photos/id/453/400/300';
    }

    // Contact form check
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.addEventListener('submit', function(event) {
            event.preventDefault();
            const userName = document.querySelector('#name').value;
            const userEmail = document.querySelector('#email').value;
            if (userName && userEmail) {
                alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }
})();
