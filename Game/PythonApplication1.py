import pygame
pygame.init() #init() initialize all imported pygame modules

#colour library
red = (255,0,0)
green = (0,255,0)
blue = (0,0,255)
black = (0,0,0)
white = (255,255,255)
orange = (255,165,0)
purple = (127,0,255)
gray = (128,128,128)
gungrey = (129,133,137)
lightgrey = (211,211,211)
pewtergrey = (137,148,153)
yellow = (255,255,0)
gold = (196,180,84)

display = pygame.display.set_mode([1000,950]) #Sets the size of the game screen (x,y)
pygame.display.set_caption("Phishing Relationship Tool") #Sets name
background = gray #sets background color
framerate = 60 #sets framerate of app
font = pygame.font.Font("freesansbold.ttf", 16)
clock = pygame.time.Clock()

#game variables
gold_qty = 0
blue_qty = 0
orange_qty = 0
purple_qty = 0
white_qty = 0
gold_wage = 200
blue_wage = 400
orange_wage = 600
purple_wage = 800
white_wage = 1000

#draw_task variables
#gold_value = 1
#blue_value = 2
#orange_value = 3
#purple_value = 4
#white_value = 5
gold_draw = False
blue_draw = False
orange_draw = False
purple_draw = False
white_draw = False
gold_length = 0
blue_length = 0
orange_length = 0
purple_length = 0
white_length = 0
gold_speed = 5
blue_speed = 4
orange_speed = 3
purple_speed = 2
white_speed = 1
balance = 100000

#draw_buttons variables
gold_cost = 60000
blue_cost = 65000
orange_cost = 70000
purple_cost = 75000
white_cost = 80000
gold_owned = False
blue_owned = False
orange_owned = False
purple_owned = False
white_owned = False
gold_manager_cost = 100
blue_manager_cost = 500
orange_manager_cost = 1500
purple_manager_cost = 4800
white_manager_cost = 10000


def draw_task(colour, y_coord, wage, draw, length, speed, qty):
    global balance
    if draw and length < 270:
        length += speed
    elif length >= 270:
        draw = False
        length = 0
        balance += (wage * qty)
    task = pygame.draw.circle(display, colour, (40, y_coord), 30, 5) #draws circles | circle(surface, color, center, radius, width)
    pygame.draw.rect(display, colour, [80, y_coord-25, 280, 50]) #Draws rectangle for loading bar | revt(surface, color, [x_display, corner, width, height])
    pygame.draw.rect(display, black, [85, y_coord-20, 270, 40]) #Draws loading bar
    pygame.draw.rect(display, green, [85, y_coord-20, length, 40]) #animated loading bar
    my_value = font.render(str(qty), True, white) #renders text so it can be displayed
    display.blit(my_value, (20, y_coord-8)) #writes text in circles
    return task, length, draw

def draw_buttons(colour, y_coord, cost, owned, manager_cost):
    colour_button = pygame.draw.rect(display, colour, [370,y_coord -25,80,50])
    colour_cost = font.render(str(round(cost,2)), True, black)
    display.blit(colour_cost, (375, y_coord-8))
    if not owned:
        manager_button = pygame.draw.rect(display, colour, [500,y_coord-25,80,50])
        manager_text = font.render(str(round(manager_cost,2)), True, black)
        display.blit(manager_text, (500, y_coord-8))
    else:
        manager_button = pygame.draw.rect(display, colour, [500,y_coord-25,80,50]) 
        manager_text = font.render("Owned :)", True, black)
        display.blit(manager_text, (500, y_coord-8))
    return colour_button, manager_button

running = True #starts game loop
while running: #while running = true game continues
    clock.tick(framerate) #sets the speed of the game in fps 
    if gold_owned and not gold_draw: #automates the loading bar when manager is bought
        gold_draw = True
    if blue_owned and not blue_draw:
        blue_draw = True
    if orange_owned and not orange_draw:
        orange_draw = True
    if purple_owned and not purple_draw:
        purple_draw = True
    if white_owned and not white_draw:
        white_draw = True
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.MOUSEBUTTONDOWN: #starts loading bar if clicked
            if task1.collidepoint(event.pos):
                gold_draw = True
            if task2.collidepoint(event.pos):
                blue_draw = True
            if task3.collidepoint(event.pos):
                orange_draw = True
            if task4.collidepoint(event.pos):
                purple_draw = True
            if task5.collidepoint(event.pos):
                white_draw = True
            if gold_manager_buy.collidepoint(event.pos) and balance >= gold_manager_cost and not gold_owned: #automates income if manager is bought for the task
                gold_owned = True
                balance -= gold_manager_cost
            if blue_manager_buy.collidepoint(event.pos) and balance >= blue_manager_cost and not blue_owned: #automates income if manager is bought for the task
                blue_owned = True
                balance -= blue_manager_cost
            if orange_manager_buy.collidepoint(event.pos) and balance >= orange_manager_cost and not orange_owned: #automates income if manager is bought for the task
                orange_owned = True
                balance -= orange_manager_cost
            if purple_manager_buy.collidepoint(event.pos) and balance >= purple_manager_cost and not purple_owned: #automates income if manager is bought for the task
                purple_owned = True
                balance -= purple_manager_cost
            if white_manager_buy.collidepoint(event.pos) and balance >= white_manager_cost and not white_owned: #automates income if manager is bought for the task
                white_owned = True
                balance -= white_manager_cost
            if gold_buy.collidepoint(event.pos) and balance >= gold_cost: #allows the purchase of more units of each production task
                gold_qty += 1
                #gold_value += 0.1
                balance -= gold_cost
                gold_cost += 1000
            if blue_buy.collidepoint(event.pos) and balance >= blue_cost:
                blue_qty += 1
                #blue_value += 0.1
                balance -= blue_cost
                blue_cost += 1250
            if orange_buy.collidepoint(event.pos) and balance >= orange_cost:
                orange_qty += 1
                #orange_value += 0.1
                balance -= orange_cost
                orange_cost += 1500
            if purple_buy.collidepoint(event.pos) and balance >= purple_cost:
                purple_qty += 1
                #purple_value += 0.1
                balance -= purple_cost
                purple_cost += 1750
            if white_buy.collidepoint(event.pos) and balance >= white_cost:
                white_qty += 1
                #white_value += 0.1
                balance -= white_cost
                white_cost += 2000
    display.fill(background) #fills the display with the background color
    task1,gold_length,gold_draw = draw_task(gold,120, gold_wage,gold_draw,gold_length,gold_speed,gold_qty) #spacing of 90 to allow heading for each employee type + initial spacing of 120 to allow for title
    task2,blue_length,blue_draw = draw_task(blue,210, blue_wage,blue_draw,blue_length,blue_speed,blue_qty) #by making task, length and draw = the drawtask function I am pulling out the data needed for loading bars
    task3,orange_length,orange_draw = draw_task(orange,300, orange_wage,orange_draw,orange_length,orange_speed,orange_qty)
    task4,purple_length,purple_draw = draw_task(purple,390, purple_wage,purple_draw,purple_length,purple_speed,purple_qty)
    task5,white_length,white_draw = draw_task(white,480, white_wage,white_draw,white_length,white_speed,white_qty)
    gold_buy, gold_manager_buy = draw_buttons(gold, 120, gold_cost, gold_owned, gold_manager_cost)
    blue_buy, blue_manager_buy = draw_buttons(blue, 210, blue_cost, blue_owned, blue_manager_cost)
    orange_buy, orange_manager_buy = draw_buttons(orange, 300, orange_cost, orange_owned, orange_manager_cost)
    purple_buy, purple_manager_buy = draw_buttons(purple, 390, purple_cost, purple_owned, purple_manager_cost)
    white_buy, white_manager_buy = draw_buttons(white, 480, white_cost, white_owned, white_manager_cost)


    display_balance = font.render('Balance: $'+str(round(balance,2)), True, white, black)
    display.blit(display_balance, (20,10))
    buy_more = font.render("Buy Employees:", True,white)
    display.blit(buy_more, (346,70))
    buy_managers = font.render("Buy Managers:", True,white)
    display.blit(buy_managers, (482,70))
    qty_title = font.render("Quantity:", True,white)
    display.blit(qty_title, (5,70))
    pygame.display.flip() #writes everything onto the display box
    
pygame.quit()
