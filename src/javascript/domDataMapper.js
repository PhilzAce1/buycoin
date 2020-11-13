function images(data) {
  const navProfileImage = document.querySelector('#nav_profileimage');
  const userProfileImage = document.querySelector('#user_profileimage');

  navProfileImage.src = data;
  userProfileImage.src = data;
}

function mapFollowers(data) {
  const {
    followers: { totalCount: followerCount },
    following: { totalCount: followingCount },
  } = data;
  document.querySelector('#followers').textContent = followerCount;
  document.querySelector('#following').textContent = followingCount;
}

function mapUserProfileInfor(data) {
  const { name, bio, username } = data;
  document.querySelector('#fullname').textContent = name;
  document.querySelector('#username').textContent = username;
  document.querySelector('#Bio').textContent = bio;
}

function mapRepository(data) {
  const { totalCount, nodes: repos } = data;
  const repoList = document.querySelector('#repolist');
  document.querySelector('#repocount').textContent = totalCount;
  console.log(repos);
  const repoMap = repos.map(
    (data) => `
    <li>
              <div class="content">
                <p class="repo_title">${data.name}</p>
                <div class="meta_info">
               
               ${
                 data.primaryLanguage !== null &&
                 data.primaryLanguage.color !== null &&
                 data.primaryLanguage.color !== null
                   ? ` <span>
                    <div class="color_lang" style="background-color: ${
                      data.primaryLanguage.color
                    }"></div>
                    ${
                      data.primaryLanguage.name === 'null'
                        ? ''
                        : data.primaryLanguage.name
                    }
                  </span>`
                   : ''
               }

                </div>
              </div>
              <button>
                <img src="./src/images/button_star.PNG" alt="button_stat" />
                Star
              </button>
            </li>`
  );
  repoList.innerHTML = repoMap;
}

export default function (data) {
  const {
    name,
    status,
    bio,
    followers,
    following,
    login: username,
    repositories,
    avatarUrl,
  } = data;
  images(avatarUrl);
  mapFollowers({ followers, following });
  mapUserProfileInfor({ name, status, bio, username });
  mapRepository(repositories);
}
