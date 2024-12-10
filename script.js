$(document).ready(function() {
    const devices = [
        {name: "Smartphone, Samsung", category: "Smartphone", releaseDate: "2024-01-15", rating: 4.5, imageUrl:  "images/device1.jpg", specs: "8GB RAM, 128GB Storage, 6.5-inch Display"
            , reviews: []},
            {name: "Laptop, Lenovo", category: "Laptop", releaseDate: "2023-11-10", rating: 4.7, imageUrl: "images/device2.jpg", specs: "16GB RAM, 512GB SSD, 15.6-inch Display", reviews: []},
            {name: "Tablet, Apple", category: "Tablet", releaseDate: "2023-09-05", rating: 4.8, imageUrl: "images/device3.jpg", specs: "4GB RAM, 64GB Storage, 10.2-inch Retina Display", reviews: []},
            {name: "Smartwatch, Garmin", category: "Smartwatch", releaseDate: "2024-02-20", rating: 4.6, imageUrl: "images/device4.jpg", specs: "Heart Rate Monitor, GPS, 1.3-inch Display", reviews: []},
            {name: "Headphones, Sony", category: "Audio", releaseDate: "2023-10-12", rating: 4.7, imageUrl: "images/device5.jpg", specs: "Noise Cancellation, 30-hour Battery Life", reviews: []},
            {name: "Camera, Canon", category: "Camera", releaseDate: "2023-08-30", rating: 4.5, imageUrl: "images/device6.jpg", specs: "24.1 MP, 1080p Full HD, Wi-Fi Enabled", reviews: []},
            {name: "iPhone 16, Apple", category: "Smartphone", releaseDate: "2024-09-10", rating: 4.9, imageUrl: "images/device7.jpg", specs: "12GB RAM, 256GB Storage, 6.1-inch Display", reviews: []},
            {name: "Laptop, HP", category: "Laptop", releaseDate: "2023-12-01", rating: 4.4, imageUrl: "images/device8.jpg", specs: "8GB RAM, 256GB SSD, 14-inch Display", reviews: []},
            {name: "Smart TV, LG", category: "Television", releaseDate: "2024-04-15", rating: 4.3, imageUrl: "images/device9.jpg", specs: "4K UHD, 55-inch, Smart Features", reviews: []},
            {name: "Tablet, Samsung", category: "Tablet", releaseDate: "2023-06-22", rating: 4.2, imageUrl: "images/device10.jpg", specs: "6GB RAM, 128GB Storage, 11-inch Display", reviews: []},
            {name: "Camera, Nikon", category: "Camera", releaseDate: "2023-07-14", rating: 4.6, imageUrl: "images/device11.jpg", specs: "20.9 MP, 4K UHD, Wi-Fi & Bluetooth", reviews: []},
            {name: "Headphones, Bose", category: "Audio", releaseDate: "2023-05-03", rating: 4.8, imageUrl: "images/device12.jpg", specs: "Noise Cancelling, 20-hour Battery Life", reviews: []},
            {name: "Applewatch, Apple", category: "Smartwatch", releaseDate: "2023-12-25", rating: 4.7, imageUrl: "images/device13.jpg", specs: "ECG, GPS, 1.7-inch Retina Display", reviews: []},
            {name: "Laptop, Dell", category: "Laptop", releaseDate: "2023-08-10", rating: 4.5, imageUrl: "images/device14.jpg", specs: "16GB RAM, 1TB SSD, 15.6-inch Display", reviews: []},
            {name: "Smartphone, Xiaomi", category: "Smartphone", releaseDate: "2024-02-05", rating: 4.4, imageUrl: "images/device15.jpg", specs: "8GB RAM, 256GB Storage, 6.7-inch Display", reviews: []},
            {name: "Smart TV, Sony", category: "Television", releaseDate: "2024-01-25", rating: 4.6, imageUrl: "images/device16.jpg", specs: "4K HDR, 65-inch, Smart Features", reviews: []},
            {name: "Tablet, Microsoft", category: "Tablet", releaseDate: "2023-09-15", rating: 4.5, imageUrl: "images/device17.jpg", specs: "8GB RAM, 128GB Storage, 12.3-inch Display", reviews: []},
            {name: "Headphones, JBL", category: "Audio", releaseDate: "2023-06-29", rating: 4.3, imageUrl: "images/device18.jpg", specs: "Bluetooth, 25-hour Battery Life", reviews: []},
            {name: "Smartwatch, Fitbit", category: "Smartwatch", releaseDate: "2023-10-01", rating: 4.2, imageUrl: "images/device19.jpg", specs: "Heart Rate, GPS, 1.2-inch Display", reviews: []},
            {name: "Camera, Sony", category: "Camera", releaseDate: "2023-11-05", rating: 4.9, imageUrl: "images/device20.jpg", specs: "61 MP, 8K Video, Wi-Fi & Bluetooth", reviews: []},
            {name: "Smartphone, OnePlus", category: "Smartphone", releaseDate: "2024-05-02", rating: 4.3, imageUrl: "images/device21.jpg", specs: "8GB RAM, 128GB Storage, 6.55-inch Display", reviews: []},
            {name: "Laptop, Asus", category: "Laptop", releaseDate: "2023-07-22", rating: 4.7, imageUrl: "images/device22.jpg", specs: "32GB RAM, 1TB SSD, 17-inch Display", reviews: []},
            {name: "Tablet, Lenovo", category: "Tablet", releaseDate: "2024-03-18", rating: 4.1, imageUrl: "images/device23.jpg", specs: "4GB RAM, 64GB Storage, 10-inch Display", reviews: []},
            {name: "Headphones, Sennheiser", category: "Audio", releaseDate: "2023-04-28", rating: 4.5, imageUrl: "images/device24.jpg", specs: "Wireless, Noise Cancellation", reviews: []},
            {name: "Smartwatch, Samsung", category: "Smartwatch", releaseDate: "2024-03-22", rating: 4.6, imageUrl: "images/device25.jpg", specs: "Heart Rate Monitor, GPS, 1.4-inch Display", reviews: []},
            {name: "Camera, Panasonic", category: "Camera", releaseDate: "2023-03-15", rating: 4.2, imageUrl: "images/device26.jpg", specs: "20.3 MP, 4K Video, Image Stabilization", reviews: []},
            {name: "Smartphone, Google", category: "Smartphone", releaseDate: "2024-06-12", rating: 4.5, imageUrl: "images/device27.jpg", specs: "12GB RAM, 256GB Storage, 6.3-inch Display", reviews: []},
            {name: "Laptop, Acer", category: "Laptop", releaseDate: "2023-09-18", rating: 4.4, imageUrl: "images/device28.jpg", specs: "16GB RAM, 1TB HDD, 15-inch Display", reviews: []},
            {name: "Smart TV, Samsung", category: "Television", releaseDate: "2023-11-08", rating: 4.8, imageUrl: "images/device29.jpg", specs: "8K QLED, 75-inch, Smart Features", reviews: []},
            {name: "Tablet, Huawei", category: "Tablet", releaseDate: "2024-02-14", rating: 4.3, imageUrl: "images/device30.jpg", specs: "6GB RAM, 128GB Storage, 10.4-inch Display", reviews: []},
        ];
        localStorage.setItem("devices", JSON.stringify(devices));   
        const devicesPerPage = 10;
        let currentPage = 1;
         // butoni viewall
         document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('mousemove', (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left; 
                const y = event.clientY - rect.top;  
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
        
                const rotateX = ((y - centerY) / centerY) * 15; 
                const rotateY = ((x - centerX) / centerX) * -15;
        
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        
            card.addEventListener('mouseleave', () => {
                card.style.transform = ''; 
            });
        });
        function renderDevices(page = 1) {
            const container = $('#device-container');
            const startIndex = (page - 1) * devicesPerPage;
            const endIndex = startIndex + devicesPerPage;
            const filteredDevices = devices.slice(startIndex, endIndex);
    
            container.empty(); 
            filteredDevices.forEach(device => {
                const deviceHtml = `
                    <div class="device" data-name="${device.name}" data-category="${device.category}" data-rating="${device.rating}" data-release="${device.releaseDate}">
                        <img src="${device.imageUrl}" alt="${device.name}" class="device-image">
                        <h3>${device.name}</h3>
                        <p>Category: ${device.category}</p>
                        <p>Release Date: ${device.releaseDate}</p>
                        <p>Specifications: ${device.specs}</p>
                        <p>Rating: <span class="rating">${device.rating}</span> / 5</p>
                        <button class="view-details-btn">View Details</button>
                    </div>
                `;
                container.append(deviceHtml);
            });
            renderPagination();
        }
    
        //sa paisje me dal per faqe
        function renderPagination() {
            const totalPages = Math.ceil(devices.length / devicesPerPage);
            $('#pagination').empty();
    
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = `<button class="page-btn" data-page="${i}">${i}</button>`; //butonat1,2,3
                $('#pagination').append(pageButton);
            }
    
            $('.page-btn').on('click', function() {
                currentPage = $(this).data('page');
                renderDevices(currentPage);
            });
        }
        
        $('#searchBar').on('keyup', function() {
            const query = $(this).val().toLowerCase();
            $('#device-container .device').filter(function() {
                $(this).toggle(
                    $(this).data('name').toLowerCase().includes(query) || 
                    $(this).data('category').toLowerCase().includes(query)
                );
            });
        });
    
        const homepage = $('#homepage');
        const mainContent = $('#main-content');
        const searchSortOptions = $('#search-sort-options');
    
        homepage.show();
        mainContent.hide();

        $('.nav-link').on('click', function (event) {
            event.preventDefault(); 
            const targetId = $(this).data('target'); 
            history.pushState({ section: targetId }, '', `#${targetId}`);
            $('#homepage').hide();
            $('#main-content').show();
            if (targetId === 'devices') {
                $('#search-sort-options').show(); 
                renderDevices(currentPage); 
            } else {
                $('#search-sort-options').hide(); 
            }
        
            $('main > section').hide(); 
            $(`#${targetId}`).show(); 
        
            
            $('#sidebar-menu').removeClass('active');
        });
        window.onpopstate = function (event) {
            const section = event.state?.section || 'homepage';     
            $('#homepage').toggle(section === 'homepage');
            $('#main-content').toggle(section !== 'homepage');
            if (section === 'devices') {
                $('#search-sort-options').show(); 
                renderDevices(currentPage); 
            } else {
                $('#search-sort-options').hide(); 
            }
            $('main > section').hide();
            $(`#${section}`).show(); 
        };
        
        $('#sort-rating').on('click', function() {
            devices.sort((a, b) => b.rating - a.rating); 
            renderDevices(currentPage);
        });
    
        $('#sort-release').on('click', function() {
            devices.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)); 
            renderDevices(currentPage);
        });
    
        $('#sort-category').on('click', function() {
            devices.sort((a, b) => a.category.localeCompare(b.category)); 
            renderDevices(currentPage);
        });
    
        $('#back-to-homepage').on('click', function() {
            mainContent.hide();
            homepage.show();
        });
    
$(document).on('click', '.view-details-btn', function () {
    const deviceIndex = $(this).closest('.device').index();
    const deviceData = JSON.stringify(devices);
    localStorage.setItem('devices', deviceData);
    window.open(`device-details.html?deviceIndex=${deviceIndex}`, '_blank');
});
$('#device-form').on('submit', function (event) {
    event.preventDefault();
    const newDevice = {
        name: $('#device-name').val(),
        category: $('#device-category').val(),
        releaseDate: $('#device-release-date').val(),
        rating: parseFloat($('#device-rating').val()),
        imageUrl: $('#device-image-url').val(),
        specs: $('#device-specs').val(),
        availability: $('input[name="availability"]:checked').val(), 
        features: $('input[name="features"]:checked')
            .map(function () {
                return this.value; 
            })
            .get(), 
        reviews: [], 
    };
    const index = $('#device-form').data('editIndex');
    if (index !== undefined) {
        devices[index] = newDevice; 
        $('#device-form').removeData('editIndex');
    } else {
        devices.push(newDevice); 
    }
    renderDevices();
    loadAdminDevices();
    $('#device-form')[0].reset(); 
});


function loadAdminDevices() {
    $('#admin-device-list').empty();
    devices.forEach((device, index) => {
        const deviceHtml = `
            <div class="admin-device" data-index="${index}">
                <h4>${device.name}</h4>
                <p>Category: ${device.category}</p>
                <p>Availability: ${device.availability}</p>
                <p>Features: ${device.features.join(', ')}</p>
                <button onclick="editDevice(${index})">Edit</button>
                <button onclick="deleteDevice(${index})">Delete</button>
            </div>
        `;
        $('#admin-device-list').append(deviceHtml);
    });
}


function editDevice(index) {
    const device = devices[index];
    $('#device-name').val(device.name);
    $('#device-category').val(device.category);
    $('#device-release-date').val(device.releaseDate);
    $('#device-rating').val(device.rating);
    $('#device-image-url').val(device.imageUrl);
    $('#device-specs').val(device.specs);
    $(`input[name="availability"][value="${device.availability}"]`).prop('checked', true);
    $('input[name="features"]').each(function () {
        $(this).prop('checked', device.features.includes(this.value));
    });

    $('#device-form').data('editIndex', index); 
}
function deleteDevice(index) {
    devices.splice(index, 1);
    loadAdminDevices();
    renderDevices();
}
        const sidebarMenu = $('#sidebar-menu');
        const hamburger = $('.hamburger');
        hamburger.on('click', function() {
            sidebarMenu.toggleClass('active');
        });
$('.nav-link').on('click', function() {
    sidebarMenu.removeClass('active');
});
            renderDevices(currentPage);
        $(document).on('mouseenter', '.fa-star', function () {
            const starValue = $(this).data('value');
            $('#star-rating .fa-star').each(function () {
                const value = $(this).data('value');
                $(this).toggleClass('hovered', value <= starValue);
            });
        });
        
        $(document).on('mouseleave', '#star-rating', function () {
            $('#star-rating .fa-star').removeClass('hovered');
        });
        
        $(document).on('click', '.fa-star', function () {
            const starValue = $(this).data('value');
            $('#star-rating .fa-star').each(function () {
                const value = $(this).data('value');
                $(this).toggleClass('selected', value <= starValue);
            });
            $('#star-rating').data('selected-rating', starValue); 
        });
        
        const canvas = document.getElementById('smileyCanvas');
const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2); 
ctx.fillStyle = 'darkblue';
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(55, 65, 5, 0, Math.PI * 2); 
ctx.arc(95, 65, 5, 0, Math.PI * 2); 
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.arc(75, 75, 30, 0, Math.PI, false); 
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();
        });