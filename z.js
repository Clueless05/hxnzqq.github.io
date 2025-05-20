    const clientId = "1v712e0skfr70uqp3xcgqazywdw49q"; // nahraď svým Client ID z Twitch dev
    const redirectUri = window.location.origin + window.location.pathname; // adresa této stránky

    const scopes = "user:read:email"; // nebo přidej další scopes podle API co chceš

    // 1) Ověření jestli už máme access token v URL
    function getAccessTokenFromUrl() {
      const params = new URLSearchParams(window.location.hash.slice(1));
      return params.get("access_token");
    }

    async function getUserData(token) {
      const response = await fetch("https://api.twitch.tv/helix/users", {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Client-ID": clientId,
        },
      });
      const data = await response.json();
      return data.data[0];
    }

    async function getFollowers(token, userId) {
      const response = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Client-ID": clientId,
        },
      });
      const data = await response.json();
      return data.total;
    }

    async function main() {
      const infoDiv = document.getElementById("info");
      const token = getAccessTokenFromUrl();

      if (!token) {
        infoDiv.textContent = "Nejsi přihlášený. Klikni na tlačítko pro přihlášení.";
        return;
      }

      infoDiv.textContent = "Načítám data...";
      try {
        const user = await getUserData(token);
        const followers = await getFollowers(token, user.id);
        infoDiv.innerHTML = `<p>Uživatel: ${user.display_name}</p><p>Počet followerů: ${followers}</p>`;
      } catch (e) {
        infoDiv.textContent = "Něco se pokazilo, zkus se odhlásit a přihlásit znovu.";
      }
    }

    // tlačítko přihlášení, které spustí OAuth flow
    document.getElementById("login").onclick = () => {
      const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scopes)}`;
      window.location.href = authUrl;
    };

    // spustit po načtení stránky
    main();