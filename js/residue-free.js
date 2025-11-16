// ============================================
// RESIDUE-FREE FARMING PAGE - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PRODUCTS CATALOG DATA
    // ============================================
    
    const products = [
        // Fertilizers
        { id: 1, name: 'Organic Vermicompost', category: 'fertilizer', price: 450, benefit: 'Rich in nutrients, improves soil structure', icon: 'fa-leaf' },
        { id: 2, name: 'Neem Cake Powder', category: 'fertilizer', price: 380, benefit: 'Natural nitrogen source, pest deterrent', icon: 'fa-seedling' },
        { id: 3, name: 'Rock Phosphate', category: 'fertilizer', price: 520, benefit: 'Slow-release phosphorus for root growth', icon: 'fa-mountain' },
        { id: 4, name: 'Potash Granules (Organic)', category: 'fertilizer', price: 480, benefit: 'Enhances flowering and fruiting', icon: 'fa-gem' },
        { id: 5, name: 'Compost Mix Premium', category: 'fertilizer', price: 350, benefit: 'Balanced NPK from composted organic matter', icon: 'fa-layer-group' },
        { id: 6, name: 'Seaweed Extract', category: 'fertilizer', price: 620, benefit: 'Micronutrients and growth hormones', icon: 'fa-water' },
        
        // Pest Control
        { id: 7, name: 'Neem Oil Concentrate', category: 'pesticide', price: 580, benefit: 'Broad-spectrum organic pesticide', icon: 'fa-shield-virus' },
        { id: 8, name: 'Panchagavya', category: 'pesticide', price: 420, benefit: 'Traditional immunity booster for plants', icon: 'fa-flask' },
        { id: 9, name: 'Bacillus thuringiensis', category: 'pesticide', price: 750, benefit: 'Biological control for caterpillars', icon: 'fa-bug' },
        { id: 10, name: 'Trichoderma Viride', category: 'pesticide', price: 680, benefit: 'Fungal disease prevention', icon: 'fa-microscope' },
        { id: 11, name: 'Garlic-Chili Spray', category: 'pesticide', price: 320, benefit: 'Natural insect repellent', icon: 'fa-pepper-hot' },
        { id: 12, name: 'Yellow Sticky Traps', category: 'pesticide', price: 180, benefit: 'Physical pest monitoring and control', icon: 'fa-file' },
        
        // Growth Promoters
        { id: 13, name: 'Humic Acid Solution', category: 'growth', price: 640, benefit: 'Enhances nutrient uptake and root growth', icon: 'fa-arrow-up' },
        { id: 14, name: 'Amino Acid Complex', category: 'growth', price: 720, benefit: 'Stress recovery and vigorous growth', icon: 'fa-dna' },
        { id: 15, name: 'Gibberellic Acid (Organic)', category: 'growth', price: 580, benefit: 'Promotes stem elongation and flowering', icon: 'fa-chart-line' },
        { id: 16, name: 'Cytokinin Extract', category: 'growth', price: 670, benefit: 'Cell division and lateral bud growth', icon: 'fa-project-diagram' },
        { id: 17, name: 'Kelp Meal', category: 'growth', price: 550, benefit: 'Natural auxins for root development', icon: 'fa-spa' },
        { id: 18, name: 'Biochar Blend', category: 'growth', price: 480, benefit: 'Carbon storage and microbial habitat', icon: 'fa-fire' },
        
        // Soil Conditioners
        { id: 19, name: 'Gypsum Powder', category: 'soil', price: 280, benefit: 'Improves soil structure in clay soils', icon: 'fa-cubes' },
        { id: 20, name: 'Dolomite Lime', category: 'soil', price: 320, benefit: 'Balances soil pH, adds calcium & magnesium', icon: 'fa-balance-scale' },
        { id: 21, name: 'Sulphur Granules', category: 'soil', price: 360, benefit: 'Lowers pH in alkaline soils', icon: 'fa-atom' },
        { id: 22, name: 'Zeolite Powder', category: 'soil', price: 520, benefit: 'Water retention and nutrient exchange', icon: 'fa-filter' },
        { id: 23, name: 'Bentonite Clay', category: 'soil', price: 380, benefit: 'Improves water-holding capacity', icon: 'fa-cloud' },
        { id: 24, name: 'Mycorrhizal Inoculant', category: 'soil', price: 780, benefit: 'Symbiotic fungi for nutrient absorption', icon: 'fa-network-wired' },
        
        // Additional Products
        { id: 25, name: 'Organic Mulch Mat', category: 'soil', price: 420, benefit: 'Weed suppression and moisture retention', icon: 'fa-leaf' },
        { id: 26, name: 'Bio-Enzymes Mix', category: 'growth', price: 590, benefit: 'Accelerates decomposition and nutrient release', icon: 'fa-recycle' },
        { id: 27, name: 'Jeevamrut Powder', category: 'fertilizer', price: 380, benefit: 'Traditional microbial culture for soil health', icon: 'fa-bacteria' },
        { id: 28, name: 'Phosphorus Solubilizing Bacteria', category: 'fertilizer', price: 650, benefit: 'Makes locked phosphorus available', icon: 'fa-vial' },
        { id: 29, name: 'Azospirillum Culture', category: 'fertilizer', price: 580, benefit: 'Atmospheric nitrogen fixation', icon: 'fa-wind' },
        { id: 30, name: 'Castor Cake', category: 'fertilizer', price: 410, benefit: 'Nitrogen-rich with nematicide properties', icon: 'fa-seedling' },
        { id: 31, name: 'Karanja Cake', category: 'pesticide', price: 440, benefit: 'Soil enrichment with pest control', icon: 'fa-shield-alt' },
        { id: 32, name: 'Beauveria bassiana', category: 'pesticide', price: 720, benefit: 'Entomopathogenic fungus for insect control', icon: 'fa-spider' },
        { id: 33, name: 'Pseudomonas fluorescens', category: 'pesticide', price: 680, benefit: 'Biocontrol agent for root diseases', icon: 'fa-shield-virus' },
        { id: 34, name: 'Bio-Surfactant', category: 'growth', price: 480, benefit: 'Enhances spray coverage and absorption', icon: 'fa-spray-can' },
        { id: 35, name: 'Calcium Nitrate (Organic)', category: 'fertilizer', price: 520, benefit: 'Fast-acting calcium for fruit quality', icon: 'fa-pills' }
    ];
    
    // ============================================
    // RENDER PRODUCTS
    // ============================================
    
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function renderProducts(category = 'all') {
        if (!productsGrid) return;
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);
        
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <i class="fas ${product.icon}"></i>
                    <span class="product-badge">Certified</span>
                </div>
                <div class="product-content">
                    <h4 class="product-name">${product.name}</h4>
                    <p class="product-benefit">${product.benefit}</p>
                    <div class="product-footer">
                        <span class="product-price">₹${product.price}</span>
                        <button class="product-btn" data-id="${product.id}">Buy Now</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers to buy buttons
        const buyButtons = productsGrid.querySelectorAll('.product-btn');
        buyButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                handleBuyProduct(product);
            });
        });
    }
    
    function handleBuyProduct(product) {
        alert(`Adding ${product.name} to cart!\nPrice: ₹${product.price}\n\nIn a production app, this would add the item to your cart.`);
    }
    
    // Filter button handlers
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter products
                const category = this.getAttribute('data-filter');
                renderProducts(category);
            });
        });
        
        // Initial render
        renderProducts();
    }
    
    // ============================================
    // CASE STUDY CHARTS
    // ============================================
    
    const caseCharts = document.querySelectorAll('.case-chart');
    if (caseCharts.length > 0 && typeof Chart !== 'undefined') {
        caseCharts.forEach((chartContainer, index) => {
            const canvas = chartContainer.querySelector('canvas');
            if (canvas) {
                const before = parseInt(chartContainer.getAttribute('data-before'));
                const after = parseInt(chartContainer.getAttribute('data-after'));
                
                new Chart(canvas, {
                    type: 'bar',
                    data: {
                        labels: ['Before', 'After'],
                        datasets: [{
                            label: 'Performance',
                            data: [before, after],
                            backgroundColor: [
                                'rgba(107, 79, 58, 0.8)',
                                'rgba(15, 138, 95, 0.8)'
                            ],
                            borderColor: [
                                'rgba(107, 79, 58, 1)',
                                'rgba(15, 138, 95, 1)'
                            ],
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100
                            }
                        }
                    }
                });
            }
        });
    }
    
    // ============================================
    // INSURANCE ACCORDION
    // ============================================
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ============================================
    // FARM CREDIT FORM
    // ============================================
    
    const creditForm = document.getElementById('creditForm');
    const eligibilityResult = document.getElementById('eligibilityResult');
    
    if (creditForm) {
        creditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('farmerName').value;
            const landSize = parseFloat(document.getElementById('landSize').value);
            const cropType = document.getElementById('cropType').value;
            const farmingYears = parseInt(document.getElementById('farmingYears').value);
            const phone = document.getElementById('phone').value;
            
            // Simple eligibility calculation
            let eligible = true;
            let maxLoan = 0;
            let reason = '';
            
            if (landSize < 1) {
                eligible = false;
                reason = 'Minimum 1 acre required';
            } else if (farmingYears < 2) {
                eligible = false;
                reason = 'Minimum 2 years farming experience required';
            } else {
                // Calculate loan amount based on land size
                maxLoan = landSize * 50000; // ₹50,000 per acre
                
                if (cropType === 'sugarcane' || cropType === 'cotton') {
                    maxLoan *= 1.2; // 20% bonus for certain crops
                }
                
                if (farmingYears >= 5) {
                    maxLoan *= 1.1; // 10% bonus for experienced farmers
                }
            }
            
            // Display result
            if (eligible) {
                eligibilityResult.className = 'eligibility-result success';
                eligibilityResult.innerHTML = `
                    <h4><i class="fas fa-check-circle"></i> Congratulations, ${name}!</h4>
                    <p><strong>You are eligible for farm credit up to: ${window.RupiyaUtils.formatCurrency(maxLoan)}</strong></p>
                    <p>Interest Rate: 7-9% per annum</p>
                    <p>Documents needed: Aadhaar, Land records, Bank statement</p>
                    <p>Our team will contact you at ${phone} within 48 hours.</p>
                `;
            } else {
                eligibilityResult.className = 'eligibility-result info';
                eligibilityResult.innerHTML = `
                    <h4><i class="fas fa-info-circle"></i> Not Eligible</h4>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <p>Please contact our support team for alternative options.</p>
                `;
            }
        });
    }
    
    // ============================================
    // DEMO MODAL
    // ============================================
    
    const demoModal = document.getElementById('demoModal');
    const viewDemoBtn = document.getElementById('viewDemoBtn');
    const modalClose = document.getElementById('modalClose');
    
    if (viewDemoBtn && demoModal) {
        viewDemoBtn.addEventListener('click', function() {
            demoModal.classList.add('active');
            animateDemoSteps();
        });
    }
    
    if (modalClose && demoModal) {
        modalClose.addEventListener('click', function() {
            demoModal.classList.remove('active');
        });
    }
    
    if (demoModal) {
        demoModal.addEventListener('click', function(e) {
            if (e.target === demoModal) {
                demoModal.classList.remove('active');
            }
        });
    }
    
    function animateDemoSteps() {
        const steps = document.querySelectorAll('.demo-step');
        let currentStep = 0;
        
        // Reset all steps
        steps.forEach(step => step.classList.remove('active'));
        
        // Animate steps sequentially
        const interval = setInterval(function() {
            if (currentStep > 0) {
                steps[currentStep - 1].classList.remove('active');
            }
            
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
                currentStep++;
            } else {
                clearInterval(interval);
                // Keep last step active
                steps[steps.length - 1].classList.add('active');
            }
        }, 1500);
    }
    
});
