
// Participant data
let participants = [
  { id: 1, name: "Alex Thompson", points: 1250 },
  { id: 2, name: "Jamie Rodriguez", points: 980 },
  { id: 3, name: "Sam Wilson", points: 875 },
  { id: 4, name: "Casey Johnson", points: 760 },
  { id: 5, name: "Jordan Smith", points: 720 },
  { id: 6, name: "Taylor Brown", points: 690 },
  { id: 7, name: "Morgan Lee", points: 650 },
  { id: 8, name: "Riley Davis", points: 610 },
  { id: 9, name: "Quinn Miller", points: 590 },
  { id: 10, name: "Charlie Adams", points: 540 },
];

// Admin password
const ADMIN_PASSWORD = "ScoreStars@4231";

// DOM elements
const leaderboardEl = document.getElementById('leaderboard');
const searchInput = document.getElementById('searchInput');
const updatePointsBtn = document.getElementById('updatePointsBtn');
const addParticipantBtn = document.getElementById('addParticipantBtn');
const updatePopup = document.getElementById('updatePopup');
const addParticipantPopup = document.getElementById('addParticipantPopup'); 
const participantSelect = document.getElementById('participantSelect');
const pointsInput = document.getElementById('pointsInput');
const nameInput = document.getElementById('nameInput');
const initialPointsInput = document.getElementById('initialPointsInput');
const updateBtn = document.getElementById('updateBtn');
const cancelBtn = document.getElementById('cancelBtn');
const addBtn = document.getElementById('addBtn');
const cancelAddBtn = document.getElementById('cancelAddBtn');
const currentYearEl = document.getElementById('currentYear');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPasswordBtn');
const cancelLoginBtn = document.getElementById('cancelLoginBtn');
const adminPanel = document.getElementById('adminPanel');
const logoutBtn = document.getElementById('logoutBtn');

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Initialize leaderboard
function initializeLeaderboard() {
  renderLeaderboard(participants);
  populateParticipantSelect();

  // Add event listeners
  searchInput.addEventListener('input', handleSearch);
  updatePointsBtn.addEventListener('click', showUpdatePopup);
  addParticipantBtn.addEventListener('click', showAddParticipantPopup);
  updateBtn.addEventListener('click', updateParticipantPoints);
  cancelBtn.addEventListener('click', hideUpdatePopup);
  addBtn.addEventListener('click', addNewParticipant);
  cancelAddBtn.addEventListener('click', hideAddParticipantPopup);
  participantSelect.addEventListener('change', handleParticipantSelection);
  
  // Admin login event listeners
  loginBtn.addEventListener('click', showLoginPopup);
  submitPasswordBtn.addEventListener('click', handleLogin);
  cancelLoginBtn.addEventListener('click', hideLoginPopup);
  logoutBtn.addEventListener('click', handleLogout);
  
  // Check if admin is already logged in (from localStorage)
  checkAdminSession();
}

// Check if admin is already logged in
function checkAdminSession() {
  const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  if (isLoggedIn) {
    adminPanel.style.display = 'block';
    loginBtn.style.display = 'none';
  }
}

// Show login popup
function showLoginPopup() {
  loginPopup.style.display = 'flex';
  passwordInput.value = '';
  passwordInput.focus();
}

// Hide login popup
function hideLoginPopup() {
  loginPopup.style.display = 'none';
}

// Handle login attempt
function handleLogin() {
  const password = passwordInput.value;
  
  if (password === ADMIN_PASSWORD) {
    // Successful login
    hideLoginPopup();
    adminPanel.style.display = 'block';
    loginBtn.style.display = 'none';
    localStorage.setItem('adminLoggedIn', 'true');
    showToast('Admin login successful');
  } else {
    // Failed login
    showToast('Incorrect password');
    passwordInput.value = '';
    passwordInput.focus();
  }
}

// Handle logout
function handleLogout() {
  adminPanel.style.display = 'none';
  loginBtn.style.display = 'block';
  localStorage.removeItem('adminLoggedIn');
  showToast('Admin logged out');
}

// Render leaderboard with given participants
function renderLeaderboard(participantsToRender) {
  // Sort participants by points in descending order
  const sortedParticipants = [...participantsToRender].sort((a, b) => b.points - a.points);
  
  // Clear existing leaderboard
  leaderboardEl.innerHTML = '';
  
  // If no participants match the filter
  if (sortedParticipants.length === 0) {
    leaderboardEl.innerHTML = '<div class="no-results">No participants found</div>';
    return;
  }
  
  // Create leaderboard entries
  sortedParticipants.forEach((participant, index) => {
    const position = index + 1;
    const entry = document.createElement('div');
    
    // Add appropriate class based on position
    entry.className = 'leaderboard-entry';
    if (position === 1) entry.classList.add('gold-entry');
    if (position === 2) entry.classList.add('silver-entry');
    if (position === 3) entry.classList.add('bronze-entry');
    
    // Create rank element (number or trophy)
    let rankElement = '';
    if (position <= 3) {
      // Trophy for top 3
      const trophyColor = position === 1 ? '#FFD700' : position === 2 ? '#C0C0C0' : '#CD7F32';
      rankElement = `
        <div class="rank-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${trophyColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
        </div>
      `;
    } else {
      // Position number for others
      rankElement = `<div class="rank-circle">${position}</div>`;
    }
    
    // Add delete button for admin
    const deleteButton = `
      <button class="delete-btn" data-id="${participant.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    `;
    
    // Build entry HTML
    entry.innerHTML = `
      <div class="participant-rank">
        ${rankElement}
        <div class="participant-name">${participant.name}</div>
      </div>
      <div class="participant-points">
        <div class="points-value">${participant.points.toLocaleString()}</div>
        <div class="points-label">points</div>
        ${localStorage.getItem('adminLoggedIn') === 'true' ? deleteButton : ''}
      </div>
    `;
    
    // Add event listener to delete button
    if (localStorage.getItem('adminLoggedIn') === 'true') {
      setTimeout(() => {
        const deleteBtn = entry.querySelector('.delete-btn');
        if (deleteBtn) {
          deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const participantId = parseInt(this.getAttribute('data-id'));
            deleteParticipant(participantId);
          });
        }
      }, 0);
    }
    
    leaderboardEl.appendChild(entry);
  });
}

// Delete participant
function deleteParticipant(participantId) {
  const participant = participants.find(p => p.id === participantId);
  if (!participant) return;
  
  if (confirm(`Are you sure you want to delete ${participant.name}?`)) {
    participants = participants.filter(p => p.id !== participantId);
    renderLeaderboard(participants);
    populateParticipantSelect();
    showToast(`${participant.name} has been removed from the leaderboard`);
  }
}

// Search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredParticipants = participants.filter(participant => 
    participant.name.toLowerCase().includes(searchTerm)
  );
  renderLeaderboard(filteredParticipants);
}

// Populate the participant select dropdown
function populateParticipantSelect() {
  participantSelect.innerHTML = '<option value="">Select Participant</option>';
  participants.forEach(participant => {
    const option = document.createElement('option');
    option.value = participant.id;
    option.textContent = participant.name;
    participantSelect.appendChild(option);
  });
}

// Show update popup
function showUpdatePopup() {
  updatePopup.style.display = 'flex';
}

// Hide update popup
function hideUpdatePopup() {
  updatePopup.style.display = 'none';
  participantSelect.value = '';
  pointsInput.value = '';
}

// Show add participant popup
function showAddParticipantPopup() {
  addParticipantPopup.style.display = 'flex';
  nameInput.value = '';
  initialPointsInput.value = '0';
  nameInput.focus();
}

// Hide add participant popup
function hideAddParticipantPopup() {
  addParticipantPopup.style.display = 'none';
}

// Handle participant selection in dropdown
function handleParticipantSelection() {
  const selectedId = parseInt(participantSelect.value);
  if (selectedId) {
    const participant = participants.find(p => p.id === selectedId);
    pointsInput.value = participant.points;
  } else {
    pointsInput.value = '';
  }
}

// Add new participant
function addNewParticipant() {
  const name = nameInput.value.trim();
  const points = parseInt(initialPointsInput.value);
  
  if (!name) {
    showToast('Please enter a participant name');
    return;
  }
  
  if (isNaN(points)) {
    showToast('Please enter valid initial points');
    return;
  }
  
  // Generate new ID
  const maxId = participants.reduce((max, p) => Math.max(max, p.id), 0);
  const newId = maxId + 1;
  
  // Add new participant
  participants.push({
    id: newId,
    name: name,
    points: points
  });
  
  // Re-render and cleanup
  renderLeaderboard(participants);
  populateParticipantSelect();
  hideAddParticipantPopup();
  
  // Show confirmation
  showToast(`${name} added to the leaderboard`);
}

// Update participant points
function updateParticipantPoints() {
  const selectedId = parseInt(participantSelect.value);
  const newPoints = parseInt(pointsInput.value);
  
  if (!selectedId || isNaN(newPoints)) {
    showToast('Please select a participant and enter valid points');
    return;
  }
  
  // Update points
  participants = participants.map(p => {
    if (p.id === selectedId) {
      return { ...p, points: newPoints };
    }
    return p;
  });
  
  // Re-render and cleanup
  renderLeaderboard(participants);
  hideUpdatePopup();
  
  // Show confirmation
  const participant = participants.find(p => p.id === selectedId);
  showToast(`${participant.name}'s points updated to ${newPoints}`);
}

// Show toast notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Add event listener for Enter key in password input
passwordInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    handleLogin();
  }
});

// Add event listener for Enter key in add participant form
nameInput?.addEventListener('keyup', function(event) {
  if (event.key === 'Enter' && initialPointsInput.value) {
    addNewParticipant();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeLeaderboard);
