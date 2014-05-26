(function(window, document, $, undefined) {

    var Caesar;
    Caesar = (function() {
        var base = 'http://vazzak2.ci.northwestern.edu/';

        var loadedTerms = {};

        Caesar.getSubjects = function(cb) {
            $.get(base + 'subjects').done(function(data, textStatus, jqXHR) {
                cb(undefined, data);
            }).fail(function(jqXHR, textStatus, err) {
                cb(err, undefined);
            });
        };
        Caesar.getTerms = function(cb) {
            $.get(base + 'terms').done(function(data, textStatus, jqXHR) {
                cb(undefined, data);
            }).fail(function(jqXHR, textStatus, err) {
                cb(err, undefined);
            });
        };
        Caesar.getCourses = function(term, subject, cb) {
            if (term in loadedTerms && subject in loadedTerms[term]) {
                return cb(undefined, loadedTerms[term][subject]);
            }
            $.get(base + 'courses/?term=' + term + '&subject=' + subject).done(function(data, textStatus, jqXHR) {
                loadedTerms[term] = loadedTerms[term] || {};
                loadedTerms[term][subject] = data;
                cb(undefined, data);
            }).fail(function(jqXHR, textStatus, err) {
                cb(err, undefined);
            });
        };
        Caesar.getTermCourses = function(term, cb) {
            var termCourses = [];
            var counter = 0;
            Caesar.getSubjects(function(err, subjects) {
                if (err) return cb(err, undefined);
                $.each(subjects,
                function(indexInArray, valueOfElement) {
                    Caesar.getCourses(term, valueOfElement.symbol,
                    function(err, courses) {
                        if (err) return cb(err, undefined);
                        termCourses = termCourses.concat(courses);
                        counter += 1;
                        if (counter == subjects.length - 1) cb(undefined, termCourses);
                    });
                });
            });
        }
        function Caesar() {}
        return Caesar;
    } ());

    /*
   * SEARCH FUNCTION
   */
    $(document).ready(function() {

        $('#add-event').click(function(e) {
            $('#customEventModal').modal();
        });

        $('#search').click(function(e) {
            $(this).parent().attr('class', 'dropdown');
        });

        $('.dhx_scale_bar').each(function(index, elem) {
            $(this).text($(this).text().substr(0, 3));
        });

        // When the timer counts down to 0 from 100ms, start the search
        var timer;
        var stoppedTypingInterval = 100;

        // On key UP, clear the timer and restart the count down
        $('#classSearchBar').keyup(function(e) {
            clearTimeout(timer);
            if (e.keyCode != 32) { // Ignore the space bar
                timer = setTimeout(search, stoppedTypingInterval);
            }
        });

        // On key down, clear the timer but do not restart the count down
        $('#classSearchBar').keydown(function() {
            clearTimeout(timer);
        });

        // The search function itself
        function search() {

            // Split the forum input into left (subject) and right (catalog #) parts
            // i.e. "EECS 211" is split to "EECS" and "211", respectively
            var inputArr = $('#classSearchBar').val().split(" ");
            var subject = inputArr[0]; // LEFT
            var catalogNum = inputArr[1]; // RIGHT
            // Search depending on the inputs given by the user
            // If the search form is not undefined/empty, then SEARCH
            if ($('#classSearchBar').val() != undefined && $('#classSearchBar').val() !== "") {

                // Hold search results in a temporary array of the top 'resultLimit' # of JSON objects
                var searchResults = [];
                var resultLimit = 7;

                // CASE 1: Search form contains 'subject' but no 'catalogNum' - search by subject ONLY
                if (catalogNum == undefined || catalogNum === "") {
                    subject = subject.toUpperCase();
                    Caesar.getCourses(4540, subject,
                    function(err, courses) {

                        // Iterate through the search results and store the top 7 values
                        $.each(courses,
                        function(index, element) {
                            if (searchResults.length < resultLimit) {
                                searchResults.push(element);
                            }
                        });

                        // Add it to the website!
                        $('#results').empty();

                        $.each(searchResults,
                        function(index, element) {
                            generateList(index, element);
                        });
                    });

                    // CASE 2: Search form contains 'subject' and 'catalogNum' - search by BOTH
                } else {
                    subject = subject.toUpperCase();
                    Caesar.getCourses(4540, subject,
                    function(err, courses) {

                        // Iterate through the search results and store the top 7 values that match catalogNum
                        $.each(courses,
                        function(index, element) {
                            if (searchResults.length < resultLimit && element.catalog_num.startsWith(catalogNum)) {
                                searchResults.push(element);
                            }
                        });

                        // Add it to the website!
                        $('#results').empty();
                        $('#results').append('<li class="listButton" id="add-event">Add a custom event</li>');
                        $.each(searchResults,
                        function(index, element) {
                            generateList(index, element);
                        });
                    });
                }
            }
        }

        // Populate drop down menu w/ search results
        function generateList(idIn, elementIn) {
            var skip = false;
            $('.added-class').each(function(index) {
                var courseData = $(this).data('courseData');
                console.log(courseData);
                if (courseData.subject == elementIn.subject && courseData.catalog_num == elementIn.catalog_num && courseData.section == elementIn.section) {
                    skip = true;
                    return;
                }
            });
            if (skip) return;
            $('<li/>', {
                id: idIn,
                class: "listButton",
                text: elementIn.subject + " " + elementIn.catalog_num + "-" + elementIn.section + " " + elementIn.title
            }).click(addCourse).data("courseData", elementIn).appendTo('#results');
        }

        function removeCourse(e) {
            $(this).parent().parent().remove();
        }

        // Add the course menu on the left sidebar
        function addCourse(e) {

            var courseData = $(this).data("courseData");
            var labs = courseData.coursecomponent_set;
            if (labs.length > 0) {
                console.log(labs);
            }

            var skip = false;
            $('.added-class').each(function(index) {
                var courseData2 = $(this).data('courseData');
                if (courseData.subject == courseData2.subject && courseData.catalog_num == courseData2.catalog_num && courseData.section == courseData2.section) {
                    skip = true;
                    return;
                }
            });
            if (skip) return;

            $('#added-classes').append($('<div/>', {
                'class': "added-class row panel panel-default"
            }).append(

            $('<a/>', {
                'class': "col-lg-12"
            }).append(

            $('<div/>', {
                'class': "col-lg-9 ",
                'text': "Course Title: " + $(this).data("courseData").title
            }), $('<div/>', {
                'class': "col-lg-9 ",
                'text': "Section: " + $(this).data("courseData").subject + " " + $(this).data("courseData").catalog_num + "-" + $(this).data("courseData").section
            }), $('<div/>', {
                'class': "col-lg-9 ",
                'text': "Location: " + $(this).data("courseData").room
            }), $('<div/>', {
                'class': "col-lg-9",
                'text': "Time: " + $(this).data("courseData").meeting_days + " " + $(this).data("courseData").start_time + "-" + $(this).data("courseData").end_time
            }), $('<div/>', {
                'class': "col-lg-3"
            }).append($('<span/>', {
                'text': "Remove"
            })).click(removeCourse))).data('courseData', $(this).data('courseData')));

        }

        function returnData(e) {
            console.log($(this).data("parentData"));
            console.log($(this).data("labData"));
        }

    });
}).call(this, window, window.document, window.jQuery);