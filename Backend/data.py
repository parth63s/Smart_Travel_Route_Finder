import random

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

print(len(countries))
def get_countries():
    return countries

class Node :
    def __init__(self):
        self.children = {}
        self.EOW = False
        self.idx = -1

class Trie :
    def __init__(self):
        self.root = Node()
    
    def insert(self, w, idx) :
        temp = self.root
        for ch in w :
            if ch not in temp.children :
                temp.children[ch] = Node()
            temp = temp.children[ch];
        temp.EOW = True
        temp.idx = idx
    
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
    
    def search_Idx(self, word) :
        temp = self.root
        for ch in word :
            if ch not in temp.children :
                return None
            temp = temp.children[ch]
        return temp.idx
    
graph = {   
            0: {1: 10000, 10: 3000},
            1: {0: 10000, 5: 5000},
            2: {3: 1000, 5: 4000},
            3: {2: 1000, 9: 2500},
            4: {5: 5000, 10: 10000},
            5: {1: 5000, 2: 4000, 4: 5000, 6: 1000, 9: 5500},
            6: {5: 1000, 7: 2000},
            7: {6: 2000, 8: 1100},
            8: {7: 2500, 9: 1200, 15: 3500},
            9: {3: 2500, 5: 5500, 8: 1200},
            10: {0: 3000, 4: 10000},
            11: {12: 10000, 21: 3000},
            12: {11: 10000, 16: 5000},
            13: {14: 1000, 16: 4000},
            14: {13: 1000, 20: 2500},
            15: {16: 5000, 21: 10000, 8: 3500},
            16: {12: 5000, 13: 4000, 15: 5000, 17: 1000, 20: 5500},
            17: {16: 1000, 18: 2000},
            18: {17: 2000, 19: 1100, 25: 9000},
            19: {18: 2500, 20: 1200},
            20: {14: 2500, 16: 5500, 19: 1200},
            21: {11: 3000, 15: 10000},
            22: {23: 10000, 32: 3000},
            23: {22: 10000, 27: 5000},
            24: {25: 1000, 27: 4000},
            25: {24: 1000, 31: 2500, 18: 9000},
            26: {27: 5000, 32: 10000},
            27: {23: 5000, 24: 4000, 26: 5000, 28: 1000, 31: 5500},
            28: {27: 1000, 29: 2000},
            29: {28: 2000, 30: 1100},
            30: {29: 2500, 31: 1200, 33: 5400},
            31: {25: 2500, 27: 5500, 30: 1200},
            32: {22: 3000, 26: 10000},
            33: {34: 10000, 43: 3000, 30: 5400},
            34: {33: 10000, 38: 5000},
            35: {36: 1000, 38: 4000},
            36: {35: 1000, 42: 2500},
            37: {38: 5000, 43: 10000},
            38: {34: 5000, 35: 4000, 37: 5000, 39: 1000, 42: 5500},
            39: {38: 1000, 40: 2000},
            40: {39: 2000, 41: 1100, 48: 2100},
            41: {40: 2500, 42: 1200},
            42: {36: 2500, 38: 5500, 41: 1200},
            43: {44: 5000, 46: 4400},
            44: {43: 5000, 45: 2500},
            45: {44: 2500, 48: 7500},
            46: {43: 4400, 44: 1000, 49: 1100, 47: 3000},
            47: {44: 8000, 48: 10000, 49: 1500, 46: 3000},
            48: {45: 7500, 47: 10000, 40: 2100},
            49: {46: 1100, 47: 1500},
        }

def findAllPathWithPrice(graph, paths, src, dest, path, vis, cost, k) :
    path.append((countries[src], cost))
    vis[src] = True

    if src == dest and k > 0:
        paths.append(list(path))
    else :
        for neighbor in graph[src] :
            if not vis[neighbor] :
                findAllPathWithPrice(graph, paths, neighbor, dest, path, vis, cost + graph[src][neighbor], k - 1)
    vis[src] = False
    path.pop();


# Given graph data
graph = {   
    0: {1: 10000, 10: 3000},
    1: {0: 10000, 5: 5000},
    2: {3: 1000, 5: 4000},
    3: {2: 1000, 9: 2500},
    4: {5: 5000, 10: 10000},
    5: {1: 5000, 2: 4000, 4: 5000, 6: 1000, 9: 5500},
    6: {5: 1000, 7: 2000},
    7: {6: 2000, 8: 1100},
    8: {7: 2500, 9: 1200, 15: 3500},
    9: {3: 2500, 5: 5500, 8: 1200},
    10: {0: 3000, 4: 10000},
    11: {12: 10000, 21: 3000},
    12: {11: 10000, 16: 5000},
    13: {14: 1000, 16: 4000},
    14: {13: 1000, 20: 2500},
    15: {16: 5000, 21: 10000, 8: 3500},
    16: {12: 5000, 13: 4000, 15: 5000, 17: 1000, 20: 5500},
    17: {16: 1000, 18: 2000},
    18: {17: 2000, 19: 1100, 25: 9000},
    19: {18: 2500, 20: 1200},
    20: {14: 2500, 16: 5500, 19: 1200},
    21: {11: 3000, 15: 10000},
    22: {23: 10000, 32: 3000},
    23: {22: 10000, 27: 5000},
    24: {25: 1000, 27: 4000},
    25: {24: 1000, 31: 2500, 18: 9000},
    26: {27: 5000, 32: 10000},
    27: {23: 5000, 24: 4000, 26: 5000, 28: 1000, 31: 5500},
    28: {27: 1000, 29: 2000},
    29: {28: 2000, 30: 1100},
    30: {29: 2500, 31: 1200, 33: 5400},
    31: {25: 2500, 27: 5500, 30: 1200},
    32: {22: 3000, 26: 10000},
    33: {34: 10000, 43: 3000, 30: 5400},
    34: {33: 10000, 38: 5000},
    35: {36: 1000, 38: 4000},
    36: {35: 1000, 42: 2500},
    37: {38: 5000, 43: 10000},
    38: {34: 5000, 35: 4000, 37: 5000, 39: 1000, 42: 5500},
    39: {38: 1000, 40: 2000},
    40: {39: 2000, 41: 1100, 48: 2100},
    41: {40: 2500, 42: 1200},
    42: {36: 2500, 38: 5500, 41: 1200},
    43: {44: 5000, 46: 4400},
    44: {43: 5000, 45: 2500},
    45: {44: 2500, 48: 7500},
    46: {43: 4400, 44: 1000, 49: 1100, 47: 3000},
    47: {44: 8000, 48: 10000, 49: 1500, 46: 3000},
    48: {45: 7500, 47: 10000, 40: 2100},
    49: {46: 1100, 47: 1500},
}


def MST(nodes) :

    edges = []
    for u in nodes:
        for v, cost in graph.get(u, {}).items():
            if v in nodes:
                edges.append((cost, u, v))

    edges.sort()

    parent = {node: node for node in nodes}
    rank = {node: 0 for node in nodes}

    def find(node):
        if parent[node] != node:
            parent[node] = find(parent[node])
        return parent[node]

    def union(node1, node2):
        root1, root2 = find(node1), find(node2)
        if root1 != root2:
            if rank[root1] > rank[root2]:
                parent[root2] = root1
            elif rank[root1] < rank[root2]:
                parent[root1] = root2
            else:
                parent[root2] = root1
                rank[root1] += 1
            return True
        return False

    mst_edges = []
    total_cost = 0
    for cost, u, v in edges:
        if union(u, v):
            mst_edges.append((countries[u],countries[v], cost))
            total_cost += cost
    return (mst_edges, total_cost)

