Feature: Check Server Status

    Scenario: Get Server Status with /api/status
        Given I make a GET request to /api/status
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a json like
        """
        {
            "server status": "running"
        }
        """
