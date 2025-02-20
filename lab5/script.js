// Handle the for submission
function handleFormSubmission() {
    const form = document.getElementById('detailsForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Validate all fields
        const responsibilityField = document.getElementById('responsibility');
        const projectDescriptionField = document.getElementById('ProjectDescription');
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone_number');
        const degreeField = document.getElementById('degree');
        const instituteField = document.getElementById('institute');
        const passingYearField = document.getElementById('passing Year');
        const jobTitleField = document.getElementById('job_title');
        const companyField = document.getElementById('company');
        const durationField = document.getElementById('duration');
        const versionControlField = document.getElementById('version');
        const projectNameField = document.getElementById('ProjectName');
        const languageCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
        const frameworkCheckboxes = document.querySelectorAll('.check-grp input[type="checkbox"]:checked');

        // Check if all necessary fields are filled
        if (!nameField.value.trim()) {
            alert('Please fill out the Name.');
            nameField.focus();
            return;
        }
        if (!emailField.value.trim()) {
            alert('Please enter email.');
            emailField.focus();
            return;
        }
        if (!phoneField.value.trim()) {
            alert('Please enter the Phone number.');
            phoneField.focus();
            return;
        }
        if (!degreeField.value.trim()) {
            alert('Please fill out the Degree field.');
            degreeField.focus();
            return;
        }
        if (!instituteField.value.trim()) {
            alert('Please enter your institution name.');
            instituteField.focus();
            return;
        }
        if (!passingYearField.value.trim()) {
            alert('Please enter passing year.');
            passingYearField.focus();
            return;
        }
        if (!jobTitleField.value.trim()) {
            alert('Please fill out the Job Title.');
            jobTitleField.focus();
            return;
        }
        if (!companyField.value.trim()) {
            alert('Please fill out the Company name.');
            companyField.focus();
            return;
        }
        if (!durationField.value.trim()) {
            alert('Please fill out the Duration field.');
            durationField.focus();
            return;
        }
        if (!responsibilityField.value.trim()) {
            alert('Please fill out the Responsibilities.');
            responsibilityField.focus();
            return;
        }
        if (!projectDescriptionField.value.trim()) {
            alert('Please fill out the Project Description.');
            projectDescriptionField.focus();
            return;
        }
        if (languageCheckboxes.length === 0) {
            alert('Please select at least one Language.');
            return;
        }
        if (frameworkCheckboxes.length === 0) {
            alert('Please select at least one Framework.');
            return;
        }
        if (!versionControlField.value.trim()) {
            alert('Please select the version control.');
            versionControlField.focus();
            return;
        }
        if (!projectNameField.value.trim()) {
            alert('Please enter a project name.');
            projectNameField.focus();
            return;
        }

        // Collect form data
        const formData = {
            name: nameField.value,
            email: emailField.value,
            phone: phoneField.value,
            degree: degreeField.value,
            institute: instituteField.value,
            passingYear: passingYearField.value,
            jobTitle: jobTitleField.value,
            company: companyField.value,
            duration: durationField.value,
            responsibility: responsibilityField.value,
            languages: Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
                .map((checkbox) => checkbox.value),
            frameworks: Array.from(document.querySelectorAll('.check-grp input[type="checkbox"]:checked'))
                .map((checkbox) => checkbox.value),
            versionControl: versionControlField.value,
            projectName: projectNameField.value,
            projectDescription: projectDescriptionField.value,
        };

        // Save form data to the sessionStorage
        sessionStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to resume page
        window.location.href = 'resume.html';
    });
}

// Render data on resume
function renderResumePage() {
    const formData = JSON.parse(sessionStorage.getItem('formData'));

    // Redirect to form.html if no data
    if (!formData) {
        window.location.href = 'form.html';
        return;
    }

    // Populate the resume with data
    document.getElementById('displayName').textContent = formData.name;
    document.getElementById('displayEmail').textContent = `Email: ${formData.email}`;
    document.getElementById('displayPhone').textContent = `Phone: ${formData.phone}`;
    document.getElementById('displayEducation').innerHTML = `
        <strong>Degree:</strong> ${formData.degree}<br>
        <strong>Institution:</strong> ${formData.institute}<br>
        <strong>Year:</strong> ${formData.passingYear}
    `;
    document.getElementById('displayExperience').innerHTML = `
        <strong>Job Title:</strong> ${formData.jobTitle}<br>
        <strong>Company:</strong> ${formData.company}<br>
        <strong>Duration:</strong> ${formData.duration}<br>
        <strong>Responsibilities:</strong> ${formData.responsibility}
    `;
    document.getElementById('displaySkills').innerHTML = `
        <ul>
            <li>Languages: ${formData.languages.join(', ')}</li>
            <li>Frameworks: ${formData.frameworks.join(', ')}</li>
            <li>Version Control: ${formData.versionControl}</li>
        </ul>
    `;
    document.getElementById('displayProject').innerHTML = `
        <ul>
            <li><strong>Name:</strong> ${formData.projectName}</li>
            <li><strong>Description:</strong> ${formData.projectDescription}</li>
        </ul>
    `;
}

// Execute the functionss based on the page
if (document.getElementById('detailsForm')) {
    handleFormSubmission();
} else if (document.getElementById('resumePage')) {
    renderResumePage();
}
