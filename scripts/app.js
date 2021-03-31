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

    $("#nav-menu").offset({
        top: ($(this).scrollTop() + 40)
    });

    ToggleClassLinkActive("nav-menu", menuTopOffset, pageStartTopOffset, pageStartHeight, "pageStart");
    ToggleClassLinkActive("nav-menu", menuTopOffset, personalInfoTopOffset, personalInfoHeight, "personal-info");
    ToggleClassLinkActive("nav-menu", menuTopOffset, aboutMeTopOffset, aboutMeHeight, "about-me");
    ToggleClassLinkActive("nav-menu", menuTopOffset, skillsTopOffset, skillsHeight, "skills");
    ToggleClassLinkActive("nav-menu", menuTopOffset, jobsExpTopOffset, jobsExpHeight, "jobs-exp");
    ToggleClassLinkActive("nav-menu", menuTopOffset, graduationExpTopOffset, graduationExpHeight, "graduation-exp");
    ToggleClassLinkActive("nav-menu", menuTopOffset, pageEndTopOffset, pageEndHeight, "page-end");
  
});

function ToggleClassLinkActive(navMenuId, menuTopOffset, sectionTopOffset, sectionHeight, sectionId) {
    if(menuTopOffset > sectionTopOffset) {
      $(`#${navMenuId} a[href^="#${sectionId}"]`).addClass('menu-active');
    }
    if(menuTopOffset > (sectionTopOffset + sectionHeight)) {
      $(`#${navMenuId} a[href^="#${sectionId}"]`).removeClass('menu-active');
    }
    if(menuTopOffset < sectionTopOffset) {
      $(`#${navMenuId} a[href^="#${sectionId}"]`).removeClass('menu-active');
    }
}