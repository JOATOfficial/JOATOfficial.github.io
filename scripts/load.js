window.onload = function()
    {
        var gSearch = document.getElementById("gSearch");
        var bSearch = document.getElementById("bSearch");

        let storedLogo = localStorage.getItem('preferredEngine');
        let currentLogo;

        if (!storedLogo)
        {
          currentLogo = document.getElementById("engineLogo").src;
          localStorage.setItem('preferredEngine', currentLogo);
        } else
        {
          if (storedLogo.indexOf("brave.png"))
          {
            document.getElementById("engineLogo").src = "icons/google.png";
            gSearch.style.display = "block";
            bSearch.style.display = "none";
          } else if (storedLogo.indexOf("google.png"))
          {
            document.getElementById("engineLogo").src = "icons/brave.png";
            bSearch.style.display = "block";
            gSearch.style.display = "none";
          }
        }
    }
