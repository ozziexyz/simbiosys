# Simbiosys

This the game I made for my AP Environmental Science 4th quarter project. The player starts out with a plot of land that has poor soil quality, and has to plant crops and use integrated pest management to develop the soil. It involves multiple APES concepts including agricultural practices, soil formation, symbiosis, and environmental systems.

I began writing the project in Java, but eventually switched to JavaScript so that I could easily release it as a browser game. The program includes multiple singletons that group related code, and structures that store the game's state. There are really two loops running here: one that counts game time and one that repaints the image on the right. Having global game state variables helped balance the load between loops and reduced code complexity significantly.

That being said, the code is still disorganized. There is an imbalance between the data stored in the game singleton and singletons that manage other parts of the game. For example, building and rendering the "shop" is handled by a shop singleton, but updating it is handled by the game. Additionally, I wished I had spent more time on the textures. Drawing them was by far the hardest subtask in completing this project, and it would have been nice to work with someone else or dedicate more time to it. 

By planting crops on the land, the roots will support soil structure and quality. This aspect of the game represents organic life's important role in soil development, and takes some inspiration from secondary succession. The pests have a parasitic relationship with the plants, where they benefit but the plants suffer. On the other hand, the animals you can use for pest management have a predator-prey relationship with the pests. 

Despite how chaotic the code is, I think set myself up well for updates. In the future, I want to add more farming aspects like irrigation to the game.