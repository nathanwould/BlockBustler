# PROJECT ISSUE TICKET

## Unexpected Behavior

I can't seed my database and I think I messed up naming conventions on my join tables.

## Expected Behavior

I expected to be able to seed my database.

## Reproduce the Error

Seeding my database.

```md
rails db:seed
```

## Documentation

```md
rails aborted!
NameError: undefined local variable or method `actors_movie' for #<Class:0x00007f94c16a8f80>
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/app/models/actor.rb:3:in `<class:Actor>'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/app/models/actor.rb:1:in `<main>'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/db/seeds.rb:10:in `<main>'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/bin/rails:5:in `<top (required)>'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/bin/spring:10:in `block in <top (required)>'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/bin/spring:7:in `tap'
/Users/nathanwood/general_assembly/sei/sapphire/unit_4/projects/BlockBustler/bin/spring:7:in `<top (required)>'
Tasks: TOP => db:seed
```

## Attempted Resolution

>This website has been useful for helping me figure out how to deal with join tables and many to many associations.

```md
1. https://www.learnhowtoprogram.com/ruby-and-rails/rails-with-active-record/many-to-many-associations
2. https://edgeguides.rubyonrails.org/active_record_migrations.html
```