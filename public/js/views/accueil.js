import Config from "../module.js"

function Accueil(doc, options){

    // LOAD CSS 
        let cssNormalService = document.getElementById('cssNormalService')
        cssNormalService.href = '/css/module/style.css';
        let cssResponsiveService = document.getElementById('cssResponsiveService')
        cssResponsiveService.href = '/css/module/responsive.css';
    // LOAD CSS 

    let ContainerPrincipaleContent = document.getElementById("ShellBody");
    ContainerPrincipaleContent.innerHTML = ""

    let cadreService = document.createElement('div')
    cadreService.classList.add('cadre__service')
        {
            // let logoServiceHTML = document.createElement('img')
            // logoServiceHTML.classList.add('cadre__service_logo')
            // logoServiceHTML.src = options.logo
            // cadreService.append(logoServiceHTML)
            // let titleHTML = document.createElement('h2')
            // titleHTML.innerText = options.app
            // cadreService.append(titleHTML)
            let descriptionHTML = document.createElement('small')
            descriptionHTML.innerText = Config.description
            cadreService.append(descriptionHTML)
            
        }
    ContainerPrincipaleContent.append(cadreService)

    let containerHTML = document.createElement('div')
    containerHTML.classList.add('container__application-uafinder')

        let ShellUALoadingUnHTML = document.createElement("div")
        ShellUALoadingUnHTML.classList.add("ShellUA__loading")
        // ShellAuthLoadingUnHTML.style.display = "none"

            let ShellUALoadingTitleUnHTML = document.createElement("div")
            ShellUALoadingTitleUnHTML.classList.add("ShellUA__loading-title")
            ShellUALoadingTitleUnHTML.innerText = "Chargement User Agent..."
            ShellUALoadingUnHTML.append(ShellUALoadingTitleUnHTML)

            let ShellUALoadingLoaderUnHTML = document.createElement("div")
            ShellUALoadingLoaderUnHTML.classList.add("ShellUA__loading-loader")
            ShellUALoadingUnHTML.append(ShellUALoadingLoaderUnHTML)

        containerHTML.append(ShellUALoadingUnHTML)

        checkUA()
        .then(result => {
    
            // console.log(result)

            gtag('event', 'service_uafinder', {
                "ua": result
            })

            ShellUALoadingUnHTML.remove()

            let ShellUACadreHTML = document.createElement("div")
            ShellUACadreHTML.classList.add("ShellUA__cadre-useragent")
            ShellUACadreHTML.innerText = result 
            containerHTML.append(ShellUACadreHTML)
    
        })
        .catch(err => {
            alert(err)
        })

    ContainerPrincipaleContent.append(containerHTML)



    async function checkUA(){

        const response = await fetch('/api/uafinder/useragent', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const ua = await response.json();
        return ua;

    }

}

export default Accueil;