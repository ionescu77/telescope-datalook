
Template.d4g_categories_menu.helpers({
  hasCategories: function(){
    return typeof Categories !== 'undefined' && Categories.find().count();
  },
  categories: function(){
    return Categories.find({}, {sort: { name: 1 }});
  },
  categoryLink: function () {
    return getSiteUrl()+'category/'+this.slug;
  }
});

Template.d4g_categories_menu.rendered = function () {
  var drop = new Drop({
    target: document.querySelector('.drop-target'),
    content: document.querySelector('.categories-content'),
    position: 'top center',
    openOn: 'hover',
    classes: 'drop-theme-arrows-bounce'
  });
};