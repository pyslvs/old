from math import sqrt

def distance(x1, y1, x2, y2):
    result = sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return result
    

def get_chain_growth(Lo, Lg):
    # Lo: origin length
    # Lg: growth length
    return (Lg - Lo) / Lo
    
    
def test_chain_growth():
    # The lowest position chain growth:
    # left_pivot(-15, -34), right_pivot(-2, -21)

    # The highest position chain growth:
    # left_pivot(-31, 3.5), right_pivot(-3, -15.5)

    Lo = distance(-15, -34, -2, -21)
    Lg = distance(-31, 3.5, -3, -15.5)
    print("origin length: ", Lo)
    print("growth length: ", Lg)
    
    chain_growth = get_chain_growth(Lo, Lg)
    print("chain_growth: ", chain_growth)
    
    
def leverage_ratio(wheel_travel, stroke)
    # wheel_travel: the vertical(up/down) distance the wheel can travel
    return wheel_travel / stroke
    
    
if __name__ == "__main__":
    test_chain_growth()