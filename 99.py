# 已知條件
initial_velocity_kmh = 310  # 初速度，公里/小時
distance = 1000  # 跑道距離，公尺

# 將初速度轉換為公尺/秒
initial_velocity_ms = initial_velocity_kmh * (1000 / 3600)

# 計算加速度
acceleration = - (initial_velocity_ms ** 2) / (2 * distance)

# 印出結果
print("所需的加速度為:", acceleration, "m/s²")