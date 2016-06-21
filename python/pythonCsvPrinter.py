import csv

def getList(filePath):
	csvInstrumentInfo = []
	#create a list of instrumentInfos - list item is a list of attributes of one instrument
	with open(filePath, 'rt') as f:
		reader = csv.reader(f, delimiter=';')
		next(reader) # to skip the top row
		for row in reader:
			csvInstrumentInfo.append(row)

	return csvInstrumentInfo


tbanor = getList('tbanor.csv')

for tbana in tbanor:
	print("{")
	print('"station" : "' + tbana[0] + '",')
	print('"lat" : "' + tbana[2] + '",')
	print('"lon" : "' + tbana[3] + '"')
	print("},")

