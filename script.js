// Project data with architecture and challenges
const projectsData = {
    'project-1': {
        title: 'Offline QR Verification System',
        architecture: 'Built a decentralized document verification workflow utilizing client-side cryptographic digital signatures. The framework parses information and maps data directly into an encoded QR structure, matching a localized JSON schema to handle state and key validation entirely on-device without an active database layer.',
        challenges: [
            'Ensuring complete data integrity and preventing tamper vulnerabilities while completely disconnected from a central server.',
            'This was solved by enforcing strict client-side signature decryption schemas and optimization workflows to keep payload sizes minimal for standard QR matrices.'
        ]
    },
    'project-2': {
        title: 'ZeroNet Control',
        architecture: 'Developed using Java and Android Studio to manage remote device state execution natively. The architecture establishes direct socket communication and local networking handlers to execute control states securely across machines operating on the same localized network routing layer.',
        challenges: [
            'Managing and resolving continuous connectivity drop-offs and maintaining zero-latency execution states over fluctuating local network hardware.',
            'Without relying on cloud-based relay infrastructure or active internet loops, maintaining reliable state synchronization and command execution.'
        ]
    }
};

/**
 * Open modal for a specific project
 * @param {string} projectId - The data-project-id attribute value
 */
function openModal(projectId) {
    const projectData = projectsData[projectId];
    
    if (!projectData) {
        console.error(`Project with ID "${projectId}" not found`);
        return;
    }

    // Populate modal content
    document.getElementById('modal-title').textContent = projectData.title;
    document.getElementById('modal-architecture').textContent = projectData.architecture;
    
    // Populate challenges
    const challengesList = document.getElementById('modal-challenges');
    challengesList.innerHTML = projectData.challenges
        .map(challenge => `<p>• ${challenge}</p>`)
        .join('');

    // Display modal
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.add('active');
    overlay.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

/**
 * Close modal on Escape key press
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

