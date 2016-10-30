$(function() {

    $.ajax({
    url: 'https://www.codeschool.com/users/1035153.json',
    dataType: 'jsonp',
    success: function(response) {
    addCompCourses(response.courses.completed);
}
})
  
    function addCompCourses(courses) {
        
        var $badges = $('#badges');
        
        courses.forEach(function(course) {
            
           // console.log(course);
            
          var $course = $('<div />', {
                'class': 'course'
        }).appendTo($badges);
        
        $('<h3 />', {
          text: course.title
        }).appendTo($course);
           
        $('<img />', {
            src: course.badge
        }).appendTo($course);
            
        $('<a />', {
            'class': 'btn btn-primary',
            target: '_blank',
            href: course.url,
            text: 'View Course'
        }).appendTo($course);    
            
      }) 
      
    }
});
