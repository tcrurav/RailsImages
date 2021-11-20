# Rails upload/donwload images

Example of an API RESTful using Rails to upload/download images.

## Getting Started

After cloning this project don't forget to:

```
bundle install
```

Create the database of your API in PostgreSQL. I used PgAdmin for that.

Create the file config/application.yml and add your database connection data:

```
DATABASE: rails_react_images
USERNAME: postgres
PASSWORD: sasa
```

Run the migrations:

```
rails db:migrate
```

Run your server:

```
rails server
```

Enjoy!!!

## Test your API using POSTMAN

### Upload an image to your API:

![alt text](https://github.com/tcrurav/RailsImages/blob/master/screenshots/published-screenshot-01.png)

If everything went well the following record should have been created in PostgreSQL:

![alt text](https://github.com/tcrurav/RailsImages/blob/master/screenshots/published-screenshot-05.png)

To check that the image file has been uploaded to your API file system look in the following directory:

![alt text](https://github.com/tcrurav/RailsImages/blob/master/screenshots/published-screenshot-02.png)

Note that the file has been saved without extension. That's pretty normal.

### Download the image from your API:

![alt text](https://github.com/tcrurav/RailsImages/blob/master/screenshots/published-screenshot-03.png)

If you now copy the image in a browser you get the uploaded image:

![alt text](https://github.com/tcrurav/RailsImages/blob/master/screenshots/published-screenshot-04.png)


## If you want to create this project from Scratch

You can follow the instructions in this Post:
https://medium.com/swlh/upload-images-to-your-rails-api-from-react-the-easy-way-241bbe71ea85

Nevertheless check the following details to get to this same project:
* Detail nº1: Add following line at the end of config/database.yml

```
Rails.application.routes.default_url_options[:host] ='localhost:3000'
```

* Detail nº2: In config/database.yml as well:

```
database: ENV["DATABASE"]
username: ENV["USERNAME"]
password: ENV["PASSWORD"]
```

* Detail nº3: Add the following gem to Gemfile:

```
gem 'figaro'
```

### Prerequisites

All you need is... some time and...
* Visual Studio Code.
* PostMan, for the RESTFul tests.
* Ruby on Rails, as a possible Backend API
* More hours than you first could think of...

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Rails](https://rubyonrails.org/) - Official Ruby on Rails site.
* [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
* [Figaro](https://medium.com/@MinimalGhost/the-figaro-gem-an-easier-way-to-securely-configure-rails-applications-c6f963b7e993) - The Figaro Gem: an easier way to securely configure Rails applications

## Acknowledgments

* https://medium.com/swlh/upload-images-to-your-rails-api-from-react-the-easy-way-241bbe71ea85. This project is based mainly on this POST.
* https://dev.to/lisahjung/beginner-s-guide-to-creating-an-api-from-scratch-using-rails-2eie. Beginner's guide to creating an API from scratch using Rails.
* http://railsapps.github.io/rails-environment-variables.html. Setting Rails environment variables.
* https://www.getpostman.com/. Used to test the RESTFul end points of the project.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.