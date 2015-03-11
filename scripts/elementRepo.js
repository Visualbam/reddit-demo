/*globals jQuery, $, document, console, prompt*/
/*jslint browser: true, plusplus: true */

var elementRepo = (function () {
    'use strict';

    var elements = [
        {
            title: 'Introduction',
            duedate: '6/22/15',
            type: 'video',
            content: 'In our first class, I will introduce the objectives and technologies we will use in this course. We will also make sure everyone is able to access the Acatar Learning Environment.',
            maxValue: 100,
            value: 10
        }, {
            title: 'What do you want to learn?',
            duedate: '6/23/15',
            type: 'text',
            content: 'In this course, I aim to provide you with knowledge that I wish candidates who I hire already knew. In order for this course to be a success, you should finish it gaining knowledge that you believe is relevant and useful for your future endeavors. What are some ideas, knowledge and or questions that you wish to learn about during this course?',
            maxValue: 100,
            value: 25
        }, {
            title: 'It depends!',
            duedate: '6/24/15',
            type: 'text',
            content: 'You’ll hear me say that a lot. It’s usually an accurate answer, whether the topic is opinion or fact. Like methods and classes, the answers to questions are almost always coupled with dependencies; with cause and effect. The patterns and practices in this course can be used to write clean, solid software… or not. While a pattern can be used to solve a problem, it doesn’t mean that it should be. Also, many patterns may achieve the same end goal, and we often find ourselves choosing between the lesser of two evils or better of two adequate competitors. In any trade, success can be affected by the tools that we use to do the job.  In the software industry, we have a broad set of tools at our disposal, and many of them can be effective under the same or similar circumstances.',
            maxValue: 100,
            value: 68
        }, {
            title: 'User stories',
            duedate: '6/25/15',
            type: 'text',
            content: 'Often, when developing software, we develop to a specification that is the result of planning and design. I’m not going to get into this subject in depth. However, user stories will be used throughout this course, so we need to understand them before moving on.',
            maxValue: 100,
            value: 88
        }, {
            title: 'Environment setup',
            duedate: '6/26/15',
            type: 'text',
            content: 'Environment Setup can be performed before Thursdays class, or during, however, it takes a long time to install everything, so its not a bad idea to get a head start.',
            maxValue: 100,
            value: 90
        }
    ];

    return elements;

}());
