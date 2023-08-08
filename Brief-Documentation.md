# ТЕХНИЧЕСКА ПЛАТФОРМА

Клиентското приложение My Recipes е уеб приложение на Angular, което се изпълнява в браузър.
Принципа на дизайн е да се направи възможно най-леко за клиента.

# КОМУНИКАЦИЯ КЛИЕНТ-СЪРВЪР

Комуникацията на клиент-сървър е реализирана в REST-API сървър. Форматър на данните е JSON.

# СИГУРНОСТ

Системата е защитена, тъй като операциите обработват данни на потребителите.

Приложението прилага основно поведение за сигурност: - Удостоверяване: Потребителите се удостоверявант въз основа на токен за удостоверяване.
След като влезне потребителя получава токен за удостоверяване от сървъра. - Удостоверения потребител получава достъп до допълнителни страници в приложението.

# АРХИТЕКТУРА

Използва се слоестна архитектура, за да направи модулите и компонентите възможно най-малко
зависими един от друг.

# ЛОКАЛИЗАЦИЯ

Приложението е реализирано на Английски език. Потребител може да го използва и на други езици.

# РЕГИСТРАЦИЯ

Регистрацията се извършва през форма. Всички полета са задължителни и с нужната валидация.
Вписването е отново с отделна форма. Задължителни полета (email and password), и с нужната валидация.

# БИСКВИТКИ

Клиента използва хранилище за бисквитки, за да съхранява потребителски данни като userId и токен за удостоверяване.

# СЛОЕВЕ В ПРИЛОЖЕНИЕТО

- Auth - компоненти за Вписване и Влизане.
- Core - компоненти за хедър и футър. Гардове и интерцептори в приложението.
- Feature - компоненти за всички страници в приложението.
- Services - сървиси в приложението. Потребителски, Рецепти и визуализиране на Грешки и съобщения.
- Shared - две дериктиви за валидация в темплейтна форма.
- Types - типизирани интерфейси в приложението.
- Util - помощни функиции и пайпове в приложението.

## =========================================== EN ========================================================

# TECHNICAL PLATFORM

The My Recipes client application is an Angular web application that runs in a browser.
The design principle is to make it as easy as possible for the customer.

# CLIENT-SERVER COMMUNICATION

Client-server communication is implemented in a REST-API server. Data format is JSON.

# SECURITY

The system is secure as operations process user data.

The application implements basic security behaviors: - Authentication: Users are authenticated based on an authentication token.
After logging in, the user receives an authentication token from the server. - Authenticated user gets access to additional pages in the application.

# ARCHITECTURE

A layered architecture is used to make modules and components as few as possible
dependent on each other.

# LOCATION

The application is implemented in English. User can also use it in other languages.

# REGISTRATION

Registration is done through a form. All fields are mandatory and with the necessary validation.
The entry is again of a separate form. Mandatory fields (email and password), and with the necessary validation.

# COOKIES

The client uses a cookie store to store user data such as userId and authentication token.

# LAYERS IN THE APP

- Auth - Login and Login components.
- Core - header and footer components. Guards and interceptors in the application.
- Feature - components for all pages in the application.
- Services - services in the application. Custom, Recipes and display of Errors and messages.
- Shared - two validation directives in template form.
- Types - typed interfaces in the application.
- Util - utility functions and pipes in the application.
