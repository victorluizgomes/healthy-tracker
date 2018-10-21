
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib
import datetime
import json
import numpy as np
from scipy.interpolate import spline

f=open('data.JSON')
data=f.read()
info=json.loads(data)

n_questions=float(len(info["questions"]))
#Problem: if they change the number of questions partway through, old dates will look
#like they have low percentages

inp_dates=[]
points=[]
for item in info["points"]:
    inp_dates.append(str(item))
    points.append(info["points"][item])

inp_dates,points=(list(t) for t in zip(*sorted(zip(inp_dates,points))))

totalnumber=0
totals=[]
percents=[]
for item in points:
    percents.append(item/n_questions*100)
    totalnumber+=item
    totals.append(totalnumber)



fig = plt.figure()
ax1=fig.add_subplot(111)
fig.patch.set_facecolor(('#808080'))
ax1.patch.set_facecolor(('#DCDCDC'))


fig.set_dpi(100)
fig.set_size_inches(7,4)
#Set size based on screen size?
fig.set_tight_layout(True)




date_labels=[]
indices=range(len(percents))

for date in inp_dates:
    items=date.split('-')
    year=items[0]
    month=items[1]
    day=items[2]
    date_label=month+'/'+day
    date_labels.append(date_label)




#xnew = np.linspace(0,len(indices),300) #300 represents number of points to make between T.min and T.max
#smoothed = spline(indices, percents,xnew)

#ax1.plot(dates,percents)
plt.grid(axis='y')
ax1.set_axisbelow(True)
ax1.fill_between(x=indices,y1=totals,y2=np.zeros(len(indices)),step='mid',color='#3f965fff')
#ax1.fill_between(x=xnew, y1=smoothed, y2=np.zeros(len(xnew)),color='#3f965fff')
ax1.xaxis.set_major_locator(matplotlib.ticker.MultipleLocator(2))
#ax1.yaxis.set_major_locator(matplotlib.ticker.MultipleLocator(50))
plt.locator_params(axis='y',nbins=4)
ax1.set_ylabel('Total points', color='white',style='italic')
ax1.set_xlabel('Date', color='white',style='italic')
plt.xticks(indices[0:len(indices):2],date_labels[0:len(indices):2],color='white')
ax1.tick_params(axis='both',colors='white')

plt.savefig('graph_total.svg')
plt.show()
f.close()




