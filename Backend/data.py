countries = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina",
    "United Kingdom", "Germany", "France", "Italy", "Spain",
    "Russia", "China", "Japan", "India", "South Korea",
    "Australia", "New Zealand", "South Africa", "Egypt", "Nigeria",
    "Saudi Arabia", "United Arab Emirates", "Turkey", "Iran", "Pakistan",
    "Indonesia", "Thailand", "Vietnam", "Philippines", "Malaysia",
    "Singapore", "Bangladesh", "Ukraine", "Poland", "Netherlands",
    "Sweden", "Norway", "Denmark", "Finland", "Greece",
    "Portugal", "Switzerland", "Belgium", "Austria", "Czech Republic",
    "Hungary", "Chile", "Colombia", "Peru", "Venezuela"
]

def get_countries():
    return countries

class Node :
    def __init__(self):
        self.children = {}
        self.EOW = False

class Trie :
    def __init__(self):
        self.root = Node()
    
    def insert(self, w) :
        temp = self.root
        for ch in w :
            if ch not in temp.children :
                temp.children[ch] = Node()
            temp = temp.children[ch];
        temp.EOW = True
    
    def find_Node(self, per) :
        temp = self.root
        for ch in per :
            if ch not in temp.children:
                return None
            temp = temp.children[ch]
        return temp
    
    def findWord(self, temp, per, words) :
        if temp.EOW:
            words.append(per)
        for ch, child in temp.children.items() :
            self.findWord(child, per + ch, words)

    
    def find_All_Word(self, pre) :
        temp = self.find_Node(pre)
        if not temp :
            return []
        words = []
        self.findWord(temp, pre, words)
        return words


