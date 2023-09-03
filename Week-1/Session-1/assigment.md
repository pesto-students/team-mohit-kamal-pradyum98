### What is a protocol stack ? How is it used in web development ?

A protocol stack is a suite that consists of layers of internet protocols that are used to power a request sent through the internet.

In Web development the protocol stack would be used to do two things.
If the DNS-IP mapping is not present in the cache , the browser needs to fetch the IP address from the DNS server.
For this request the a single protocol from every layer will be utilized , and this specific case the protocols used will be as follows:
Application Layer -> DNS
Transport Layer -> UDP
Network Layer -> IP
Link Layer -> Wireless LAN

Similarly after the IP has been obtained an HTTPS request will be made to fetch the webpage and the protocol stack that will be used will be as follows:
Appication Layer -> HTTP TLS
Transport Layer -> TCP
Network Layer -> IP
Link Layer -> Wireless LAN

### What are the different types of web servers, and how do they differ in terms of functionality and performance?

There are a number of web-servers available today and each server serves its own functionality
Below is the list of a few servers and their functionality which differentiates them from each other:

*Reference : https://www.educba.com/server-types/*

Application servers: Application server is a server which is used to host the application. Application server are system software upon which web application or desktop applications run. It consists of web server connector, computer programming language, database connector, runtime libraries and the Administration code. Application server frameworks are Software framework for building application server. It allows users to create both web application and server environment.
Client servers: Client server is a distributed application that partition task or workload between the providers of resource or service called servers and service requesters are called as client Both clients and server communicate with each other over computer network on separate software hardware, but both client and server by reside in the system. Client does not share any of its resources but request resources from server
Collaboration Servers: The goal of collaboration server is to support conduct of shared activities of software development teams. Its main concern is to support project management activities rather than project products. Collaboration server provide scheduling support for each project, team or individual. Also provides alerts for schedule reviews and collaboration event.
Mail Servers: Mail server is server that handles and delivers email over a network, usually over the internet. It receives email from client computers and deliver them to other mail server. It also delivers email to client computers. Client computer is normal computer where user read their emails for examples computer at home or office. Also advanced mobile or smartphones with email facilities are considered client computers.
FTP Servers: FTP server is used for transferring files supporting sub directories, log in and set of manipulation commands. It can also be used to upload HTML pages on HTTP server or download log files to remote PC. Access control interface allows users to start or stop FTP server and to manage the built-in user accounts. It uses user callback function to send the notification about FTP server to user application.

### What is web hosting, and what are the different types of hosting services available for websites?

Web hosting is a service that stores your website's files on a server and delivers them to users when they visit your website. When you create a website, you need to find a web hosting provider that will store your website's files and make them accessible to the public.

There are many different types of web hosting services available, each with its own set of features and benefits. Some of the most common types of web hosting services include:

Shared hosting: Shared hosting is the most affordable type of web hosting. With shared hosting, your website's files are stored on a server with other websites. This can mean that your website's performance may be affected if the other websites on the server are using a lot of resources.
VPS hosting: VPS hosting is a more expensive type of web hosting than shared hosting. With VPS hosting, your website's files are stored on a virtual server that is isolated from other websites. This means that your website will have dedicated resources and will not be affected by the performance of other websites on the server.
Dedicated hosting: Dedicated hosting is the most expensive type of web hosting. With dedicated hosting, you have your own physical server that is not shared with any other websites. This means that you will have complete control over your server's resources and performance.
Managed Hosting: Here you pay a provider to maanage your website and its resources along with its performance

### What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?


Scaling is the ability of a web application to handle increasing traffic and demand. It is important for web applications because it ensures that users can always access the application, even when there is a lot of traffic.

There are two main types of scaling: vertical scaling and horizontal scaling.

Vertical scaling involves increasing the resources of the existing server, such as memory, CPU, and storage. This can be done by upgrading the server hardware or by adding more servers to the cluster.
Horizontal scaling involves adding more servers to the cluster. This can be done by using a cloud-based service or by setting up your own cluster.

Here are some of the benefits of scaling a web application:

Increased performance
Increased reliability
Increased scalability

### What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

Search engine optimization (SEO) is the process of improving the ranking of a website in search engine results pages (SERPs). SEO can be done by optimizing the website's content, structure, and code.

There are many different factors that affect a website's ranking in SERPs, including:

Keywords: The keywords that are used in the website's content, titles, and meta descriptions.
Content: The quality and relevance of the website's content.
Structure: The organization and navigation of the website.
Code: The speed and performance of the website's code.
Web developers can optimize their websites for better search engine rankings by:

Using relevant keywords: When creating content, web developers should use relevant keywords that their target audience is likely to search for.
Optimizing titles and meta descriptions: The titles and meta descriptions of each page should be optimized for relevant keywords.
Creating high-quality content: The content of each page should be high-quality and informative.
