// let menuTopOffset = null;
// let pageStartTopOffset, pageStartHeight = null;
// let personalInfoTopOffset, personalInfoHeight = null;
// let aboutMeTopOffset, aboutMeHeight = null;
// let skillsTopOffset, skillsHeight = null;
// let jobsExpTopOffset, jobsExpHeight = null;
// let graduationExpTopOffset, graduationExpHeight = null;
// let pageEndTopOffset, pageEndHeight = null;


// function setGlobalVariable() {
//     menuTopOffset = $("#nav-menu").offset().top;

//     pageStartTopOffset = $("#pageStart").offset().top;
//     pageStartHeight = $("#pageStart").height();

//     personalInfoTopOffset = $("#personal-info").offset().top;
//     personalInfoHeight = $("#personal-info").height();

//     aboutMeTopOffset = $("#about-me").offset().top;
//     aboutMeHeight = $("#about-me").height();

//     skillsTopOffset = $("#skills").offset().top;
//     skillsHeight = $("#skills").height();

//     jobsExpTopOffset = $("#jobs-exp").offset().top;
//     jobsExpHeight = $("#jobs-exp").height();

//     graduationExpTopOffset = $("#graduation-exp").offset().top;
//     graduationExpHeight = $("#graduation-exp").height();

//     pageEndTopOffset = $("#page-end").offset().top;
//     pageEndHeight = $("#page-end").height();
// }

// Testar
// setGlobalVariable();

$(window).scroll(() => {
    let menuTopOffset = $("#nav-menu").offset().top;

    const pageStartTopOffset = $("#page-start").offset().top;
    const pageStartHeight = $("#page-start").height();

    const personalInfoTopOffset = $("#personal-info").offset().top;
    const personalInfoHeight = $("#personal-info").height();

    const aboutMeTopOffset = $("#about-me").offset().top;
    const aboutMeHeight = $("#about-me").height();

    const skillsTopOffset = $("#skills").offset().top;
    const skillsHeight = $("#skills").height();

    const jobsExpTopOffset = $("#jobs-exp").offset().top;
    const jobsExpHeight = $("#jobs-exp").height();

    const graduationExpTopOffset = $("#graduation-exp").offset().top;
    const graduationExpHeight = $("#graduation-exp").height();

    const pageEndTopOffset = $("#page-end").offset().top;
    const pageEndHeight = $("#page-end").height();

    // setGlobalVariable();

    $("#nav-menu").offset({
        top: ($(this).scrollTop() + 40)
    });

    ToggleClassLinkActive(menuTopOffset, pageStartTopOffset, pageStartHeight, "pageStart");
    ToggleClassLinkActive(menuTopOffset, personalInfoTopOffset, personalInfoHeight, "personal-info");
    ToggleClassLinkActive(menuTopOffset, aboutMeTopOffset, aboutMeHeight, "about-me");
    ToggleClassLinkActive(menuTopOffset, skillsTopOffset, skillsHeight, "skills");
    ToggleClassLinkActive(menuTopOffset, jobsExpTopOffset, jobsExpHeight, "jobs-exp");
    ToggleClassLinkActive(menuTopOffset, graduationExpTopOffset, graduationExpHeight, "graduation-exp");
    ToggleClassLinkActive(menuTopOffset, pageEndTopOffset, pageEndHeight, "page-end");
  

});

function ToggleClassLinkActive(menuTopOffset, sectionTopOffset, sectionHeight, sectionId) {
    if(menuTopOffset > sectionTopOffset) {
      $(`#nav-side a[href^="#${sectionId}"]`).addClass('menu-active');
    }
    if(menuTopOffset > (sectionTopOffset + sectionHeight)) {
      $(`#nav-side a[href^="#${sectionId}"]`).removeClass('menu-active');
    }
    if(menuTopOffset < sectionTopOffset) {
      $(`#nav-side a[href^="#${sectionId}"]`).removeClass('menu-active');
    }
}