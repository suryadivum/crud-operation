import numpy as np

a = np.array([[1, 2, 30], [10, 15, 4]])
print("The array:", a)
print("The maximum elements of columns:", a.max(axis=1))
print("The minimum element of rows", a.min(axis=0))
print("The sum of all rows", a.sum(axis=0))
