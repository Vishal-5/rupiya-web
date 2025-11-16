// Carbon Credits Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // CARBON CALCULATOR
    // ============================================
    
    const calculateBtn = document.getElementById('calculateBtn');
    const creditPrice = document.getElementById('creditPrice');
    const priceDisplay = document.getElementById('priceDisplay');
    
    // Update price display
    if (creditPrice && priceDisplay) {
        creditPrice.addEventListener('input', function() {
            priceDisplay.textContent = '₹' + this.value;
        });
    }
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateCarbonCredits);
    }
    
    function calculateCarbonCredits() {
        // Get input values
        const landArea = parseFloat(document.getElementById('landArea').value);
        const cropType = document.getElementById('cropTypeCalc').value;
        const baselineSOC = parseFloat(document.getElementById('baselineSOC').value);
        const socIncrease = parseFloat(document.getElementById('socIncrease').value);
        const projectYears = parseInt(document.getElementById('projectYears').value);
        const creditPriceValue = parseInt(document.getElementById('creditPrice').value);
        
        // Constants for calculation
        const soilDepth = 0.3; // meters (30cm)
        const bulkDensity = 1.3; // tonnes per cubic meter
        const co2ConversionFactor = 3.67; // Convert C to CO2e
        
        // Crop-specific multipliers (based on carbon sequestration potential)
        const cropMultipliers = {
            'wheat': 1.0,
            'rice': 0.9,
            'cotton': 1.1,
            'sugarcane': 1.2,
            'pulses': 1.3,
            'vegetables': 0.8,
            'mixed': 1.0
        };
        
        const cropMultiplier = cropMultipliers[cropType] || 1.0;
        
        // Calculate carbon sequestration
        // SOC increase per hectare per year (tonnes)
        const socIncreasePerHa = landArea * soilDepth * bulkDensity * (socIncrease / 100) * cropMultiplier;
        
        // Convert to CO2 equivalent
        const co2ePerYear = socIncreasePerHa * co2ConversionFactor;
        
        // Annual credits (1 credit = 1 tonne CO2e)
        const annualCredits = co2ePerYear;
        
        // Annual earnings
        const annualEarnings = annualCredits * creditPriceValue;
        
        // Total project values
        const totalSOC = socIncreasePerHa * projectYears;
        const totalCO2e = co2ePerYear * projectYears;
        const totalEarnings = annualEarnings * projectYears;
        
        // Display results
        document.getElementById('annualCredits').textContent = annualCredits.toFixed(2) + ' tonnes';
        document.getElementById('annualEarnings').textContent = window.RupiyaUtils.formatCurrency(annualEarnings);
        document.getElementById('totalSOC').textContent = totalSOC.toFixed(2) + ' tonnes';
        document.getElementById('co2Equiv').textContent = totalCO2e.toFixed(2) + ' tonnes';
        document.getElementById('totalEarnings').textContent = window.RupiyaUtils.formatCurrency(totalEarnings);
        
        // Create earnings chart
        createEarningsChart(annualEarnings, projectYears);
    }
    
    function createEarningsChart(annualEarnings, years) {
        const canvas = document.getElementById('earningsChart');
        if (!canvas || typeof Chart === 'undefined') return;
        
        // Destroy existing chart if it exists
        if (window.earningsChartInstance) {
            window.earningsChartInstance.destroy();
        }
        
        // Generate data for each year
        const labels = [];
        const data = [];
        for (let i = 1; i <= years; i++) {
            labels.push('Year ' + i);
            data.push(annualEarnings);
        }
        
        window.earningsChartInstance = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Annual Earnings (₹)',
                    data: data,
                    backgroundColor: 'rgba(15, 138, 95, 0.2)',
                    borderColor: 'rgba(15, 138, 95, 1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Earnings: ₹' + context.parsed.y.toLocaleString('en-IN');
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value / 1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Export PDF button
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', function() {
            alert('PDF export functionality would be implemented here.\n\nIn a production app, this would generate a detailed PDF report with:\n- Input parameters\n- Calculation results\n- Earnings projections\n- Methodology explanation');
        });
    }
    
    // Apply for verification button
    const applyVerificationBtn = document.getElementById('applyVerificationBtn');
    if (applyVerificationBtn) {
        applyVerificationBtn.addEventListener('click', function() {
            window.location.href = 'for-farmers.html';
        });
    }
    
    // ============================================
    // PROGRESS GOALS ANIMATION
    // ============================================
    
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const target = parseInt(bar.getAttribute('data-target'));
                
                // Animate progress bar
                setTimeout(() => {
                    bar.style.setProperty('--target-width', target + '%');
                    bar.classList.add('animated');
                }, 200);
                
                // Animate percentage counter
                const percentageElement = bar.parentElement.previousElementSibling.querySelector('.goal-percentage');
                if (percentageElement) {
                    animatePercentage(percentageElement, target);
                }
                
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
    
    function animatePercentage(element, target) {
        let current = 0;
        const increment = target / 50;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '%';
                clearInterval(interval);
            } else {
                element.textContent = Math.floor(current) + '%';
            }
        }, 30);
    }
    
    // ============================================
    // SOIL LAYER PARALLAX
    // ============================================
    
    window.addEventListener('scroll', function() {
        const practiceTiles = document.querySelectorAll('.practice-tile');
        
        practiceTiles.forEach((tile, index) => {
            const rect = tile.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const layers = tile.querySelectorAll('.soil-layer');
                const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
                
                layers.forEach((layer, layerIndex) => {
                    const speed = 0.5 + (layerIndex * 0.2);
                    const offset = scrollPercent * 10 * speed;
                    layer.style.transform = `translateY(${offset}px)`;
                });
            }
        });
    });
    
});
