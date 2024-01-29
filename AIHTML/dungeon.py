import random

class Player:
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense

class Enemy:
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense

def combat(player, enemy):
    print(f"{player.name} engages in combat with {enemy.name}!")

    while player.health > 0 and enemy.health > 0:
        player_damage = max(0, player.attack - enemy.defense)
        enemy_damage = max(0, enemy.attack - player.defense)

        print(f"{player.name} attacks {enemy.name} for {player_damage} damage.")
        enemy.health -= player_damage

        if enemy.health <= 0:
            print(f"{enemy.name} has been defeated!")
            break

        print(f"{enemy.name} counterattacks for {enemy_damage} damage.")
        player.health -= enemy_damage

        if player.health <= 0:
            print(f"{player.name} has been defeated!")
            break

def main():
    player_name = input("Enter your character's name: ")
    player = Player(name=player_name, health=20, attack=5, defense=3)

    print(f"Welcome, {player.name}! You find yourself in a dark dungeon.")

    while True:
        action = input("What would you like to do? (explore/fight/quit): ").lower()

        if action == "quit":
            print("Thanks for playing!")
            break
        elif action == "explore":
            if random.random() < 0.5:
                print("You explore the dungeon and find nothing.")
            else:
                enemy = Enemy(name="Monster", health=10, attack=4, defense=2)
                combat(player, enemy)
        elif action == "fight":
            enemy = Enemy(name="Monster", health=10, attack=4, defense=2)
            combat(player, enemy)
        else:
            print("Invalid command. Please enter explore, fight, or quit.")

if __name__ == "__main__":
    main()