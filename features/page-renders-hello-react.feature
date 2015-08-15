Feature: Make sure starter project says hello

# Go learn about cucumber-js
# 
# Write tests that anyone interested in your product
# could understand given enough explaination of the purpose.
#

Background:
  Given that I want to test my project
  And I can write a simple list of specs
  Then I can use cucumber-js to get my tests done

Scenario: Render Hello Page
  Given I have the next super cool application
  When I render the app
  Then the render should return:
  """
  <div>Welcome to React version 0.13.3 and live reloading</div>
  """
