Feature: slide API

    Scenario: Create 1 slide by application/json
        Given I make a POST request to /api/slide/
        And I set header content-type to application/json; charset=utf-8
        And I set body to
        """
        {
            "slide-title": "Cucumber Test",
            "slide-content": "<p>Cucumber Test</p>",
            "sequence": 0,
            "presentation": "presentation_id",
            "last-editor": "user_id"
        }
        """
        When I receive a response
        Then I expect response should have a status 201
        And I expect response should have a json like
        """
        {
            "result": {
                "n": 1,
                "ok": 1
            },
            "connection": {
                "id": 0,
                "host": "localhost",
                "port": 27017
            },
            "ops": [
                {   
                    "slide-title": "Cucumber Test",
                    "slide-content": "<p>Cucumber Test</p>",
                    "sequence": 0,
                    "presentation": "presentation_id",
                    "last-editor": "user_id",
                    "_id": "typeof $V === 'string'"
                }
            ],
            "insertedCount": 1,
            "insertedId": "typeof $V === 'string'",
            "n": 1,
            "ok": 1
        }
        """

    # application/x-www-form-urlencoded will encode Number to String.
    Scenario: Create 1 slide by application/x-www-form-urlencoded
        Given I make a POST request to /api/slide/
        And I set header content-type to application/x-www-form-urlencoded; charset=utf-8
        And I set form body to
        """
        {
            "slide-title": "Cucumber Test",
            "slide-content": "<p>Cucumber Test</p>",
            "sequence": 0,
            "presentation": "presentation_id",
            "last-editor": "user_id"
        }
        """
        When I receive a response
        Then I expect response should have a status 201
        And I expect response should have a json like
        """
        {
            "result": {
                "n": 1,
                "ok": 1
            },
            "connection": {
                "id": 0,
                "host": "localhost",
                "port": 27017
            },
            "ops": [
                {   
                    "slide-title": "Cucumber Test",
                    "slide-content": "<p>Cucumber Test</p>",
                    "sequence": "0",
                    "presentation": "presentation_id",
                    "last-editor": "user_id",
                    "_id": "typeof $V === 'string'"
                }
            ],
            "insertedCount": 1,
            "insertedId": "typeof $V === 'string'",
            "n": 1,
            "ok": 1
        }
        """
