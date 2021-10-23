//criação de objeto
const LinksSocialMedia = {
  github: 'lipersilva',
  youtube: 'channel/UCj_21MBOgUomJvX1kkS6kfg',
  facebook: 'filiperodriguesdasilva',
  instagram: 'lipe_rsilva',
  twitter: 'lipe_rsilva'
}

//criação de função
function changeNameSocial() {
  //document.getElementById('userName').textContent = 'Magr1nn'
  //userName.textContext = 'Magr1nn'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeNameSocial()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
